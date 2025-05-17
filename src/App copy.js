import * as React from 'react'
import '@fontsource/hind-vadodara/300.css';
import '@fontsource/hind-vadodara/400.css';
import '@fontsource/hind-vadodara/500.css';
import '@fontsource/hind-vadodara/600.css';
import '@fontsource/hind-vadodara/700.css';
import './App.css'
import Navigation from './Navigation/Navigation/Main';
import { ChakraProvider } from '@chakra-ui/react';
import { ConfirmDialogProvider } from './Component/Dialog/ConfirmDialog';
import logo from './Artboard 2.png'

export default function App() {
  return (
    // <ChakraProvider>
    //   <ConfirmDialogProvider>
    //     <Navigation />
    //   </ConfirmDialogProvider>
    // </ChakraProvider>
    // <Navigation />
    <div className='card shadow-lg p-5' style={{}}>
      <div className='flex justify-between'>
        <div>
          <img style={{ width: '150px' }} src={logo} />
          <p className='mt-2'>Mobile No - 92208 92407</p>
          <p className='mt-1'>Email - sanjeeda27598@gmail.com</p>
        </div>
        <div className='text-right'>
          <p className='text-2xl'>Quotation</p>
          <p>Quotation Date - 20 Mar, 2025</p>
        </div>
      </div>
      <div className='mt-2 pt-2 border-t border-black'>
        <p>Project: Course Selling Website with Admin Panel</p>
        <p> Client Name: Shweta Berry</p>
        <p> Prepared By: Fluxoura</p>
      </div>
      <div>
        <p className='font-bold underline mt-2 mb-2'>Project Overview</p>
        <p className='text-xs my-1'>We will develop a scalable course-selling website with the following technologies:</p>
        <p>Frontend: React.js</p>
        <p>Backend: Node.js with MongoDB</p>
        <p> Server: DigitalOcean / AWS</p>
        <p> Integrations: Payment Gateway (Razorpay/Stripe), Meeting Booking (Zoom/Google Calendar)</p>
        <p>Video Hosting: Third-party service required (e.g., Vimeo, AWS S3 + CloudFront)</p>

        <p className='font-bold underline mt-2 mb-2'>Development Team:</p>
        <p>Total Team Members: 4</p>
        <p>2 Backend Developers (Node.js, MongoDB, API development)</p>
        <p>1 Frontend Developer (React.js, UI/UX)</p>
        <p>1 DevOps Engineer (Server setup, deployment, security)</p>
      </div>

      <div className='mt-2 text-left'>
        <table className='w-full'>
          <tr>
            <th className='border p-2'>Service</th>
            <th className='border p-2'>Cost (INR)</th>
          </tr>
          <tr>
            <td className='border p-2'>Frontend Development (React.js)</td>
            <td className='border p-2'>₹40,000</td>
          </tr>
          <tr>
            <td className='border p-2'>Backend Development (Node.js + MongoDB)</td>
            <td className='border p-2'>₹60,000</td>
          </tr>
          <tr>
            <td className='border p-2'>Server Setup & Deployment (AWS/DigitalOcean)</td>
            <td className='border p-2'>₹25,000</td>
          </tr>
          {/* <tr>
            <td className='border p-2'>Payment & Meeting Integration</td>
            <td className='border p-2'></td>
          </tr> */}
          <tr>
            <td className='border p-2'>Testing & Security Optimization</td>
            <td className='border p-2'>₹25,000</td>
          </tr>
          <tr>
            <td className='text-right border font-bold p-2'>Total</td>
            <td className='border font-bold p-2'>₹1,50,000</td>
          </tr>
        </table>
      </div>
      <div>
        <p className='font-bold underline mt-3 mb-3'>Maintenance & Support Charges:</p>
        <p>After project completion, 12-month maintenance will be charged at ₹8,000 - ₹10,000 per month, depending on the support level required.
          Maintenance covers bug fixes, minor updates, and performance monitoring (major updates will be charged separately).</p>

      </div>
      <div>
        <p className='font-bold underline mt-2 mb-2'>Important Notes:</p>
        <p>Video Hosting: Direct video uploads to the website are not possible. The client must use a third-party video hosting provider such as Vimeo, AWS S3, or Mux. Any subscription fees or usage charges for video hosting will be the sole responsibility of the client and must be managed independently.</p>
        <p className='font-bold underline mt-2 mb-2'>Payment Terms:</p>
        <p>30% Advance Payment before starting the project.</p>
        <p>50% On Project Completion.</p>
        <p> 20% After One Month of Live Testing.</p>
        <p> Additional Requirements: Any extra features beyond the discussed scope may increase the project cost.</p>
      </div>
    </div>
  )
}
