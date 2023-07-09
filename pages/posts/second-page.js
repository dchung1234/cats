import Head from 'next/head';
import Link from 'next/link';
import ProfileSummary from "/components/profileSummary";
import utilStyles from '/styles/utils.module.css';

export default function SecondPage({hideProfile, handleViewMenu}) {
    return (
        <ProfileSummary hideProfile={hideProfile} handleViewMenu={handleViewMenu}>
            <Head><title>Second Page!</title></Head>
            <table>
                <thead>
                    <tr>
                        <td>Monday</td>
                        <td>Tuesday</td>
                        <td>Wednesday</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>one</td>
                        <td>two</td>
                        <td>three</td>
                    </tr>

                </tbody>
            </table>
        </ProfileSummary>
    );
}