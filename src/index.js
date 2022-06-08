import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactKonva from './ReactKonva'
// import Zoom from './Zoom';
// import Cropper from './Cropper';
// import Treeview from './Treeview';
// import Treeview2 from './Treeview2';
import PrimeReactTree from './PrimeReactTree';
import TreeViewAntDesign from './TreeViewAntDesign';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TreeViewAntDesign />);