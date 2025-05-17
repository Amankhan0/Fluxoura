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

export default function App() {
  return (
      <ChakraProvider>
        <ConfirmDialogProvider>
          <Navigation />
        </ConfirmDialogProvider>
      </ChakraProvider>
  )
}
