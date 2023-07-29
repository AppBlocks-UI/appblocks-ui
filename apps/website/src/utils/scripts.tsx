import { NextRouter } from "next/router";

import { PDFIcon, JPGIcon, ZIPIcon, XLSIcon } from '@root/components/base/Icons';

export const switchPage = (link: string, router: NextRouter) => {
    router.push({ pathname: link }, undefined, {
      shallow: true,
    });
  };

export const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return (<PDFIcon fontSize="1rem" />)
    case 'jpg':
      return <JPGIcon fontSize="1rem" />
    case 'zip':
      return <ZIPIcon fontSize="1rem" />
    case 'xls':
      return <XLSIcon fontSize="1rem" />
    default:
      return <PDFIcon fontSize="1rem" />
  }
}