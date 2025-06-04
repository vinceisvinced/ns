
import Image from 'next/image'
import TagItem from './TagItem'
import md5 from 'js-md5'
import { siteConfig } from '@/lib/config'
import NotionIcon from '@/components/NotionIcon'

export const ArticleInfo = (props) => {
  const { post } = props

  const emailHash = md5(siteConfig('CONTACT_EMAIL', '#'))

  return <section className="flex-wrap flex mt-2 text-gray--600 dark:text-gray-400 font-light leading-8">
        <div>

            <h1 className="font-bold text-3xl text-black dark:text-white">
                {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post?.pageIcon} />}{post?.title}
            </h1>

            {post?.type !== 'Page' && <>
                <nav className="flex mt-7 items-start text-gray-500 dark:text-gray-400">
                    <div className="flex mb-4">
                        <a href={siteConfig('CONTACT_GITHUB', '#')} className="flex">
                            <Image
                                alt={siteConfig('AUTHOR')}
                                width={24}
                                height={24}
                                src={`https://drive.google.com/file/d/1ShT0SD68zy0-wCI7LOcgIraTE_4ejjbh/view?usp=sharing`}
                                className="rounded-full"
                            />
                            <p className="ml-2 md:block">{siteConfig('AUTHOR')}</p>
                        </a>
                        <span className="block">&nbsp;/&nbsp;</span>
                    </div>
                    <div className="mr-2 mb-4 md:ml-0">
                        {post?.publishDay}
                    </div>
                    {post?.tags && (
                        <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
                            {post?.tags.map(tag => (
                                <TagItem key={tag} tag={tag} />
                            ))}
                        </div>
                    )}
                </nav>
            </>}

        </div>

    </section>
}
