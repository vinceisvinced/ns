import dynamic from 'next/dynamic'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

const Announcement = ({ notice, className }) => {
  if (notice?.blockMap) {
    return null
  } else {
    return null
  }
}
export default Announcement
