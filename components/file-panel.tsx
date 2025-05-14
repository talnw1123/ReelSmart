"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

type VideoFile = {
  id: number
  name: string
  duration: string
  thumbnail: string
  selected?: boolean
}

export default function FilePanel() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFiles, setSelectedFiles] = useState<number[]>([1])

  const videoFiles: VideoFile[] = [
    {
      id: 1,
      name: "Edit Mode Javi_1.mov",
      duration: "16:03",
      thumbnail: "/placeholder.svg?height=100&width=150",
      selected: true,
    },
    {
      id: 2,
      name: "No Premiere In Shot Edit",
      duration: "7:07",
      thumbnail: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 3,
      name: "Export Mode Javi_2.mov",
      duration: "6:02",
      thumbnail: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 4,
      name: "Edit Mode Javi_0.mov",
      duration: "9:09",
      thumbnail: "/placeholder.svg?height=100&width=150",
    },
  ]

  const selectFile = (id: number) => {
    if (selectedFiles.includes(id)) {
      setSelectedFiles(selectedFiles.filter((fileId) => fileId !== id))
    } else {
      setSelectedFiles([...selectedFiles, id])
    }
  }

  return (
    <>
      <div className="p-2 border-b border-[#333]">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-medium">
            Javier...ge\Javier - Commercial Shots\Javier Editing at Computer B Roll
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search files..."
            className="pl-8 bg-[#333] border-0 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="mt-2 text-xs text-gray-400">1 of 11 items selected</div>
      </div>

      <ScrollArea className="flex-1">
        <div className="grid grid-cols-2 gap-2 p-2">
          {videoFiles.map((file) => (
            <div
              key={file.id}
              className={`relative cursor-pointer rounded overflow-hidden ${
                selectedFiles.includes(file.id) ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => selectFile(file.id)}
            >
              <img
                src={file.thumbnail || "/placeholder.svg"}
                alt={file.name}
                className="w-full h-24 object-cover bg-black"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-1 text-xs">
                <div className="truncate">{file.name}</div>
                <div className="text-gray-400">{file.duration}</div>
              </div>
              {file.id === 1 && (
                <div className="absolute top-1 right-1 bg-blue-500 text-white text-[10px] px-1 rounded">MP4</div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </>
  )
}
