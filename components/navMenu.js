import Link from 'next/link';
import Image from 'next/image';
import styles from './navMenu.module.css';
import { Tooltip } from '@nextui-org/react';

export default function NavMenu({ }) {
    let pages = [];

    pages.push({
        page: 'about-me',
        imageUrl: '/images/Zoe3.png',
        aspect: 1517 / 2205,
        tooltip: "About Me",
        key: 1
    });

    pages.push({
        page: 'second-page',
        imageUrl: '/images/Maisy2.png',
        aspect: 1760 / 1740,
        tooltip: "Second Page",
        key: 2
    });

    pages.push({
        page: 'about-me',
        imageUrl: '/images/Maggie3.png',
        aspect: 831 / 1448,
        tooltip: "About Me",
        key: 3
    });

    const items = pages.map(x => {
        const height = 300;
        const width = 300 * x.aspect;
        return <div className={styles.box} key={x.key}>
            <Link href={`posts/${x.page}`} >
                <Tooltip content={x.tooltip} placement='bottom' rounded color="invert" followCursor={true} hideArrow>
                    <Image priority
                        src={x.imageUrl}
                        object-fit='contain'
                        alt=""
                        width={width}
                        height={height}
                    >
                    </Image>
                </Tooltip>
            </Link>
        </div>
    }
    );

    return (
        <section>
            <div className={styles.fullMenuContainer} >
                {items}
            </div>
        </section>
    );
}