import React from 'react'
import jsPDF from 'jspdf';
import { CSVLink } from "react-csv";
import * as autoTable from 'jspdf-autotable'
import { GenerateFileName } from '../../../Utils/Utils';

let btnClass = 'btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90'
export default function Download({ TH, data, screen, fileName }) {

    console.log('data----', data);

    const PrintPdf = () => {
        if (data) {
            const pdf = new jsPDF('l', 'mm', [700, 210]);
            pdf.autoTable({ html: '.table', useCss: true, })
            var finalY = pdf.lastAutoTable.finalY || 7
            pdf.autoTable({
                startY: finalY + 20,
                head: [TH.map(name => { return name.isPdf ? name?.title?.replaceAll('-', ' ') : null })],
                body: GeneratePDFData(),
            })
            pdf.autoTable({
                startY: finalY + 20,
                html: '.table',
                useCss: true,
            })
            if (fileName) {
                pdf.save(GenerateFileName(fileName));
            } else {
                pdf.save("fileName");
            }
        }
    }

    const GeneratePDFData = (type) => {
        if (data??data?.data) {

            console.log('data??data?.data', (data?.data ?? data));

            var temp = TH?.map(name => name.isPdf ? name?.title?.replaceAll('-', ' ') : undefined).filter(title => title !== undefined);
            var td = (data?.data ?? data)?.map(row => TH?.map(name => name.isPdf ? row[name['serverKey']] || '---' : '')) || []
            if (type === 'Excel') { return [temp, ...td] }
            return td || []
        } else {
            return []
        }
    }

    return (
        <div>
            {(data?.length ?? data?.paginate) && TH? <div className='grid grid-cols-2 gap-4 mt-7'>
                <button className={btnClass} onClick={PrintPdf}>Download PDF</button>
                <button className={btnClass}><CSVLink data={GeneratePDFData('Excel')} filename={fileName}>Download Excel</CSVLink></button>
            </div> : null}
        </div>
    )
}
