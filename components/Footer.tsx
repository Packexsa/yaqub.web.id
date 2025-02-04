'use client'

import siteMetadata from '@/data/siteMetadata'
import { Github, Mail, Twitter } from 'lucide-react'
import { usePathname } from 'next/navigation'

import Link from './Link'

export default function Footer() {
    const pathName = usePathname()

    return (
        <footer>
            <div className="mt-16 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                    {siteMetadata.twitter && (
                        <a
                            href={siteMetadata.twitter}
                            className="text-muted-foreground hover:brightness-125 dark:hover:brightness-125"
                            aria-label="Twitter"
                            title="Twitter (@enscry)"
                        >
                            <Twitter size={24} />
                        </a>
                    )}
                    {siteMetadata.email && (
                        <a
                            href={`mailto:${siteMetadata.email}`}
                            className="text-muted-foreground hover:brightness-125 dark:hover:brightness-125"
                            aria-label="Email"
                            title="Email (jason -at- enscribe -dot- dev)"
                        >
                            <Mail size={24} />
                        </a>
                    )}
                    {siteMetadata.github && (
                        <a
                            href={siteMetadata.github}
                            className="text-muted-foreground hover:brightness-125 dark:hover:brightness-125"
                            aria-label="GitHub"
                            title="GitHub (/jktrn)"
                        >
                            <Github size={24} />
                        </a>
                    )}
                </div>
                {pathName == '/' && (
                    <div className="mb-2 text-xs text-muted-foreground">
                        Homepage assets by{' '}
                        <Link
                            href="https://freepik.com"
                            className="text-muted-foreground/75 underline"
                        >
                            Freepik
                        </Link>
                    </div>
                )}
                <div className="mb-10 flex space-x-2 text-sm text-muted-foreground">
                    <div>{siteMetadata.author}</div>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                    <div>{` • `}</div>
                    <Link href="/">{siteMetadata.title}</Link>
                </div>
            </div>
        </footer>
    )
}
