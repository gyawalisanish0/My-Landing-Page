import { icons, tagIconMap } from './icons'

export default function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="tag-row">
      {tags.map((tag) => {
        const iconName = tagIconMap[tag]
        const IconComponent = iconName ? icons[iconName] : null
        return (
          <span className="tag" key={tag}>
            {IconComponent && <IconComponent width={14} height={14} />}
            {tag}
          </span>
        )
      })}
    </div>
  )
}
