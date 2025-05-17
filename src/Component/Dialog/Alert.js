import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
} from '@chakra-ui/react'
import { useRef } from 'react'
export default function Alert({ isShow, onClose, title, description, confirmBtnLabel, onConfirm }) {
    const cancelRef = useRef()
    // const { isOpen, onOpen, onClose } = useDisclosure()

    console.log('isShow', isShow);

    return (
        <AlertDialog isOpen={isShow}>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        {title}
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        {description}
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef}  onClick={onClose} >
                            Cancel
                        </Button>
                        <Button colorScheme='red' onClick={onConfirm} ml={3}>
                            {confirmBtnLabel}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}