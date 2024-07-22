'use client'

import { ChevronRight, File, Folder } from 'lucide-react'
import React from 'react'

type Node = {
  name: string
  nodes?: Node[]
}

let nodes: Node[] = [
  {
    name: 'Home',
    nodes: [
      {
        name: 'Movies',
        nodes: [
          {
            name: 'Action',
            nodes: [
              {
                name: '2000s',
                nodes: [
                  { name: 'Gladiator.mp4' },
                  { name: 'American-Beauty.mp4' },
                ],
              },
              { name: '2010s', nodes: [] },
            ],
          },
          { name: 'Comedy', nodes: [{ name: '2000s', nodes: [] }] },
        ],
      },
      {
        name: 'Music',
        nodes: [
          { name: 'Rock', nodes: [] },
          { name: 'Pop', nodes: [] },
        ],
      },
      { name: 'Pictures', nodes: [] },
      { name: 'Documents', nodes: [] },
      { name: 'passwords.txt' },
    ],
  },
]

const FolderPage = () => {
  return (
    <div className="py-16">
      <ul>
        {nodes.map((node) => (
          <FilesystemItem node={node} key={node.name} />
        ))}
      </ul>
    </div>
  )
}

function FilesystemItem({ node }: { node: Node }) {
  let [isOpen, setIsOpen] = React.useState(false)

  return (
    <li className="my-1.5" key={node.name}>
      <span className="flex items-center gap-1.5">
        {node.nodes && node.nodes.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <ChevronRight
              className={`size-4 text-gray-500 ${isOpen ? 'rotate-90' : ''}`}
            />
          </button>
        )}

        {node.nodes ? (
          <Folder
            className={`size-6 text-sky-500 ${
              node.nodes.length === 0 ? 'ml-[22px]' : ''
            }`}
          />
        ) : (
          <File className="ml-[22px] size-6 text-gray-900" />
        )}
        {node.name}
      </span>

      {isOpen && (
        <ul className="pl-6">
          {node.nodes?.map((node) => (
            <FilesystemItem node={node} key={node.name} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default FolderPage
