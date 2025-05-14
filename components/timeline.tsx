import { ScrollArea } from "@/components/ui/scroll-area"

export default function Timeline() {
  // Mock data for timeline tracks
  const tracks = [
    { id: "v1", name: "Video 1", type: "video", color: "blue" },
    { id: "a1", name: "A1", type: "audio", color: "blue" },
    { id: "a2", name: "A2", type: "audio", color: "gray" },
  ]

  // Mock data for clips
  const clips = [
    {
      id: 1,
      trackId: "v1",
      start: 10,
      width: 150,
      color: "yellow",
      label: "review the files on...",
    },
    {
      id: 2,
      trackId: "v1",
      start: 170,
      width: 100,
      color: "yellow",
      label: "and bring...",
    },
    {
      id: 3,
      trackId: "v1",
      start: 280,
      width: 120,
      color: "yellow",
      label: "A new he...",
    },
    {
      id: 4,
      trackId: "v1",
      start: 410,
      width: 90,
      color: "yellow",
      label: "so the...",
    },
    {
      id: 5,
      trackId: "v1",
      start: 610,
      width: 80,
      color: "yellow",
      label: "W...",
    },
    {
      id: 6,
      trackId: "v1",
      start: 700,
      width: 120,
      color: "yellow",
      label: "open the new...",
    },
  ]

  // Mock data for adjustment layers
  const adjustmentLayers = Array.from({ length: 15 }, (_, i) => ({
    id: `adj-${i}`,
    label: "Adjustment Layer",
    color: i % 3 === 0 ? "purple" : "transparent",
  }))

  // Mock data for subtitles
  const subtitles = [
    { id: "sub-1", start: 170, width: 100, text: "Welcome to our video" },
    { id: "sub-2", start: 280, width: 120, text: "Today we'll learn about editing" },
    { id: "sub-3", start: 410, width: 90, text: "Let's get started" },
  ]

  return (
    <div className="flex h-full">
      {/* Track headers */}
      <div className="w-20 bg-[#232323] border-r border-[#333] flex flex-col">
        <div className="h-10 border-b border-[#333] flex items-center justify-center">
          <div className="text-xs text-gray-400">{tracks[0].name}</div>
        </div>
        {tracks.map((track) => (
          <div
            key={track.id}
            className={`h-12 border-b border-[#333] flex items-center justify-center ${
              track.id === "v1" ? "bg-blue-900" : ""
            }`}
          >
            <div className="text-xs font-medium">{track.id}</div>
          </div>
        ))}
        {/* Add subtitle track */}
        <div className="h-12 border-b border-[#333] flex items-center justify-center bg-green-900/30">
          <div className="text-xs font-medium">SUB</div>
        </div>
      </div>

      {/* Timeline content */}
      <div className="flex-1 relative overflow-hidden">
        {/* Time markers */}
        <div className="h-10 bg-[#2a2a2a] border-b border-[#333] flex items-end px-2 text-xs text-gray-400">
          <div className="absolute left-0 right-0 bottom-0 flex">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex-1 border-r border-[#444] h-3 flex items-center">
                <span className="ml-1">{`00:00:${i * 5}:00`}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline tracks */}
        <ScrollArea className="h-[calc(100%-40px)]">
          <div className="relative" style={{ height: "600px", width: "2000px" }}>
            {/* Current time indicator */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-blue-500 left-[400px] z-10"></div>

            {/* Adjustment layers */}
            <div className="absolute top-0 left-0 right-0 h-[120px] bg-[#1a1a1a] border-b border-[#333]">
              {adjustmentLayers.map((layer, index) => (
                <div
                  key={layer.id}
                  className={`absolute h-8 ${layer.color === "purple" ? "bg-purple-900/30" : ""} border-r border-[#333]`}
                  style={{
                    left: `${index * 120}px`,
                    top: `${Math.floor(index / 5) * 40}px`,
                    width: "120px",
                  }}
                >
                  {layer.color === "purple" && (
                    <div className="text-[10px] text-center text-purple-300 mt-1 truncate px-1">{layer.label}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Video track */}
            <div className="absolute top-[120px] left-0 right-0 h-12 bg-[#1a1a1a]">
              {clips.map((clip) => (
                <div
                  key={clip.id}
                  className="absolute h-full bg-yellow-600/80 rounded-sm border border-yellow-500"
                  style={{ left: `${clip.start}px`, width: `${clip.width}px` }}
                >
                  <div className="text-[10px] text-center text-black font-medium mt-1 truncate px-1">{clip.label}</div>
                </div>
              ))}
            </div>

            {/* Audio tracks */}
            <div className="absolute top-[180px] left-0 right-0 h-[120px]">
              {/* Audio waveforms */}
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={`wave-${i}`} className="h-12 bg-[#1a1a1a] border-b border-[#333] relative">
                  <div className="absolute left-[280px] right-[400px] top-2 bottom-2 bg-green-500/20 rounded-sm">
                    {/* Waveform visualization */}
                    <div className="w-full h-full flex items-center">
                      {Array.from({ length: 50 }).map((_, j) => (
                        <div
                          key={`bar-${j}`}
                          className="w-1 mx-0.5 bg-green-500"
                          style={{
                            height: `${Math.sin(j * 0.5) * 50 + 50}%`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtitle track */}
            <div className="absolute top-[300px] left-0 right-0 h-12 bg-[#1a1a1a] border-b border-[#333]">
              {subtitles.map((subtitle) => (
                <div
                  key={subtitle.id}
                  className="absolute h-full bg-green-600/50 rounded-sm border border-green-500"
                  style={{ left: `${subtitle.start}px`, width: `${subtitle.width}px` }}
                >
                  <div className="text-[10px] text-center text-white font-medium mt-1 truncate px-1">
                    {subtitle.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Sound effects track (new) */}
            <div className="absolute top-[360px] left-0 right-0 h-12 bg-[#1a1a1a] border-b border-[#333]">
              {/* Sound effect markers */}
              <div
                className="absolute h-8 bg-blue-600/50 rounded-sm border border-blue-500 top-2"
                style={{ left: "280px", width: "60px" }}
              >
                <div className="text-[10px] text-center text-white font-medium mt-1 truncate px-1">Whoosh</div>
              </div>
              <div
                className="absolute h-8 bg-blue-600/50 rounded-sm border border-blue-500 top-2"
                style={{ left: "410px", width: "40px" }}
              >
                <div className="text-[10px] text-center text-white font-medium mt-1 truncate px-1">Impact</div>
              </div>
              <div
                className="absolute h-8 bg-blue-600/50 rounded-sm border border-blue-500 top-2"
                style={{ left: "700px", width: "30px" }}
              >
                <div className="text-[10px] text-center text-white font-medium mt-1 truncate px-1">Click</div>
              </div>
            </div>

            {/* Highlights track (new) */}
            <div className="absolute top-[420px] left-0 right-0 h-12 bg-[#1a1a1a] border-b border-[#333]">
              {/* Highlight markers */}
              <div
                className="absolute h-8 bg-orange-600/50 rounded-sm border border-orange-500 top-2"
                style={{ left: "170px", width: "230px" }}
              >
                <div className="text-[10px] text-center text-white font-medium mt-1 truncate px-1">
                  Auto Highlight 1
                </div>
              </div>
              <div
                className="absolute h-8 bg-orange-600/50 rounded-sm border border-orange-500 top-2"
                style={{ left: "610px", width: "210px" }}
              >
                <div className="text-[10px] text-center text-white font-medium mt-1 truncate px-1">
                  Auto Highlight 2
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
