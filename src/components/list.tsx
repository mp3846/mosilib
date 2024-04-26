import React, { FC, ReactNode } from 'react'

interface ListItem {
	id?: string | number
}

interface ListProps<T extends ListItem> {
	items: T[]
	renderItem?: (item: T, index: number) => ReactNode
	keyExtractor?: (item: T, index: number) => string | number
	containerClassName?: string
	itemClassName?: string
}

const List: FC<ListProps<any>> = ({
	items,
	renderItem = (item) => <div>{item}</div>,
	keyExtractor = (item, index) => (item.id ? item.id : index),
	containerClassName,
	itemClassName
}) => {
	return (
		<div className={containerClassName}>
			{items.map((item, index) => (
				<span key={keyExtractor(item, index)} className={itemClassName}>
					{renderItem(item, index)}
				</span>
			))}
		</div>
	)
}

export default List
