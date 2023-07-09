import Head from 'next/head';
import ProfileSummary from "/components/profileSummary";
import utilStyles from '/styles/utils.module.css';
import PdfView from '../../components/pdfViewer';

export default function AboutMe({hideProfile, handleViewMenu}) {
    const aboutMeParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida convallis tellus, a elementum augue tempus sed. Ut lobortis dui vel ultricies iaculis. Aliquam erat volutpat. Sed sagittis venenatis erat, at finibus tortor ultricies eget. In massa nisl, aliquam quis tristique nec, posuere eu massa. Praesent molestie luctus lectus eu pellentesque. Pellentesque erat mi, iaculis sit amet iaculis a, fermentum in ligula. Vivamus id iaculis dui, vitae faucibus massa. Praesent a tortor sit amet dolor pulvinar pharetra.';
    return (
        <ProfileSummary hideProfile={hideProfile} handleViewMenu={handleViewMenu}>
            <Head><title>About me!</title></Head>
            <p className={utilStyles.contentSm}>{aboutMeParagraph}</p>
            <PdfView></PdfView>
        </ProfileSummary>
    );
}