import type {Metadata} from 'next'; import './globals.css';
export const metadata:Metadata={title:'Career Evidence Engine | Day 05',description:'Evidence-preserving resume-to-role intelligence: trace requirements to real resume evidence, find gaps, and tailor without fabricating claims.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
