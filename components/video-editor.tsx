"use client"

import { useState, useEffect } from "react"
import {
  Play,
  SkipBack,
  SkipForward,
  Square,
  Pause,
  Maximize2,
  Scissors,
  Plus,
  Minus,
  MoreHorizontal,
  MessageSquare,
  Music,
  Sparkles,
  Eye,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { demoVideos } from "./demo-videos"
import FilePanel from "./file-panel"
import Timeline from "./timeline"
import EffectsPanel from "./effects-panel"

export default function VideoEditor() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState("00:00:00:00")
  const [totalTime, setTotalTime] = useState("00:00:10:00")
  const [activeTab, setActiveTab] = useState("effects")
  const [videoSource, setVideoSource] = useState(demoVideos.original)
  const [brightness, setBrightness] = useState(0)
  const [contrast, setContrast] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const [temperature, setTemperature] = useState(0)
  const [tint, setTint] = useState(0)
  const [playTimer, setPlayTimer] = useState<NodeJS.Timeout | null>(null)

  // เมื่อกดปุ่ม Play จะเริ่มนับเวลาและหยุดเมื่อกดปุ่ม Pause
  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentTime((prev) => {
          // แปลงเวลาเป็นวินาที เพิ่ม 1 วินาที แล้วแปลงกลับเป็นรูปแบบ 00:00:00:00
          const [hours, minutes, seconds, frames] = prev.split(":").map(Number)
          let totalSeconds = hours * 3600 + minutes * 60 + seconds + 1
          const newHours = Math.floor(totalSeconds / 3600)
          totalSeconds %= 3600
          const newMinutes = Math.floor(totalSeconds / 60)
          const newSeconds = totalSeconds % 60

          return `${newHours.toString().padStart(2, "0")}:${newMinutes.toString().padStart(2, "0")}:${newSeconds.toString().padStart(2, "0")}:${frames.toString().padStart(2, "0")}`
        })
      }, 1000)

      setPlayTimer(timer)

      return () => {
        clearInterval(timer)
      }
    } else if (playTimer) {
      clearInterval(playTimer)
    }
  }, [isPlaying])

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation */}
      <div className="bg-[#1a1a1a] p-2 flex items-center justify-between border-b border-[#333]">
        <div className="flex items-center space-x-4">
          <div className="bg-[#333] p-1 rounded">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
          </div>
          <div className="flex space-x-4">
            <span className="font-medium">Import</span>
            <span className="font-medium">Edit</span>
            <span className="font-medium">Export</span>
          </div>
        </div>
        <div className="text-sm text-gray-400">Javier x Lila Import Export - Edited</div>
        <div className="flex items-center space-x-4">
          <span className="text-xs font-medium">ESSENTIALS</span>
          <Button variant="outline" size="icon" className="h-6 w-6">
            <Maximize2 className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-[#2a2a2a] p-2 text-xs flex items-center justify-between border-b border-[#333]">
        <div className="flex items-center space-x-2">
          <span>Bin: Javier Editing at Computer B Roll</span>
        </div>
        <div className="flex items-center space-x-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
            <TabsList className="bg-[#333]">
              <TabsTrigger value="effects" className="text-xs">
                Effects
              </TabsTrigger>
              <TabsTrigger value="libraries" className="text-xs">
                Libraries
              </TabsTrigger>
              <TabsTrigger value="prompt-editing" className="text-xs flex items-center">
                <MessageSquare className="w-3 h-3 mr-1" />
                Prompt Editing
              </TabsTrigger>
              <TabsTrigger value="subtitles" className="text-xs flex items-center">
                <MessageSquare className="w-3 h-3 mr-1" />
                Auto Subtitles
              </TabsTrigger>
              <TabsTrigger value="sound-effects" className="text-xs flex items-center">
                <Music className="w-3 h-3 mr-1" />
                Sound Effects
              </TabsTrigger>
              <TabsTrigger value="highlights" className="text-xs flex items-center">
                <Sparkles className="w-3 h-3 mr-1" />
                Auto Highlights
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex items-center space-x-2">
          <span>Source: Edit Mode Javi_1.mov</span>
          <span>Program: Lila x Javier Import Export</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - File Browser */}
        <div className="w-[350px] bg-[#232323] border-r border-[#333] flex flex-col">
          <FilePanel />
        </div>

        {/* Center Panel - Video Preview */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 bg-[#1a1a1a] relative">
            {isPlaying ? (
              <video
                src="https://raw.githubusercontent.com/talnw1123/ReelSmart/main/public/TUNGTUNG.mp4" // ใส่ path ของวิดีโอจริงที่นี่
                className="absolute inset-0 w-full h-full object-contain"
                autoPlay
                style={{
                  filter: `brightness(${1 + brightness / 100}) contrast(${1 + contrast / 100}) saturate(${1 + saturation / 100}) sepia(${temperature / 100}) hue-rotate(${tint}deg)`,
                }}
              />
            ) : (
              <img
                src={"https://raw.githubusercontent.com/talnw1123/ReelSmart/main/public/TUNGTUNG%20PIC.jpg"}
                alt="Video preview"
                className="absolute inset-0 w-full h-full object-contain"
                style={{
                  filter: `brightness(${1 + brightness / 100}) contrast(${1 + contrast / 100}) saturate(${1 + saturation / 100}) sepia(${temperature / 100}) hue-rotate(${tint}deg)`,
                }}
              />
            )}
            <div className="absolute bottom-4 left-4 text-white text-sm">{currentTime}</div>
            <div className="absolute bottom-4 right-4 text-white text-sm">{totalTime}</div>

            {/* แสดงไอคอน Play ขนาดใหญ่เมื่อวิดีโอไม่ได้เล่น */}
          </div>

          {/* Video Controls */}
          <div className="bg-[#2a2a2a] p-2 flex items-center justify-center space-x-2 border-t border-[#333]">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <SkipForward className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => {
                setIsPlaying(false)
                setCurrentTime("00:00:33:09")
              }}
            >
              <Square className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Scissors className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Minus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Panel - Effects */}
        <div className="w-[350px] bg-[#232323] border-l border-[#333]">
          {activeTab === "effects" || activeTab === "libraries" ? (
            <EffectsPanel
              brightness={brightness}
              setBrightness={setBrightness}
              contrast={contrast}
              setContrast={setContrast}
              saturation={saturation}
              setSaturation={setSaturation}
              temperature={temperature}
              setTemperature={setTemperature}
              tint={tint}
              setTint={setTint}
            />
          ) : activeTab === "prompt-editing" ? (
            <PromptEditingPanel setVideoSource={setVideoSource} />
          ) : activeTab === "subtitles" ? (
            <SubtitlesPanel setVideoSource={setVideoSource} />
          ) : activeTab === "sound-effects" ? (
            <SoundEffectsPanel setVideoSource={setVideoSource} />
          ) : (
            <HighlightsPanel setVideoSource={setVideoSource} />
          )}
        </div>
      </div>

      {/* Timeline */}
      <div className="h-[250px] bg-[#1a1a1a] border-t border-[#333]">
        <Timeline />
      </div>
    </div>
  )
}

function PromptEditingPanel({ setVideoSource }) {
  const [promptText, setPromptText] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePromptSubmit = () => {
    if (!promptText.trim()) return

    setIsProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false)

      // Change the video source based on the prompt
      if (promptText.toLowerCase().includes("slow motion") || promptText.toLowerCase().includes("สโลว์โมชัน")) {
        setVideoSource(demoVideos.slowMotion)
      } else if (promptText.toLowerCase().includes("highlight") || promptText.toLowerCase().includes("ไฮไลท์")) {
        setVideoSource(demoVideos.highlight)
      } else if (promptText.toLowerCase().includes("cut") || promptText.toLowerCase().includes("ตัด")) {
        setVideoSource(demoVideos.cut)
      } else if (promptText.toLowerCase().includes("color") || promptText.toLowerCase().includes("สี")) {
        setVideoSource(demoVideos.colorGraded)
      } else {
        // Default change for any other prompt
        setVideoSource(demoVideos.original)
      }

      console.log("Processing prompt:", promptText)

      // แจ้งให้ผู้ใช้ทราบว่าสามารถกดปุ่ม Play ที่ UI ด้านล่างได้แล้ว
      alert("การแก้ไขเสร็จสิ้น คุณสามารถกดปุ่ม Play ที่ด้านล่างเพื่อดูผลลัพธ์ได้")
    }, 2000)
  }

  return (
    <div className="h-full flex flex-col bg-[#232323] border-l border-[#333]">
      <div className="p-2 border-b border-[#333] flex items-center">
        <MessageSquare className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">Prompt-Based Editing</span>
      </div>

      <ScrollArea className="flex-1 p-3">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-4">
              Describe what you want to do with your video, and AI will help you edit it.
            </p>

            <div className="space-y-3">
              <div>
                <Label htmlFor="edit-prompt" className="text-xs">
                  Your Editing Prompt
                </Label>
                <Textarea
                  id="edit-prompt"
                  placeholder="e.g., 'Cut out all silent parts', 'Add slow motion to the action scenes', 'Create a 30-second highlight reel'"
                  className="mt-1 bg-[#333] border-0 text-sm resize-none h-24"
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="model" className="text-xs">
                    AI Model
                  </Label>
                  <Select defaultValue="advanced">
                    <SelectTrigger id="model" className="mt-1 bg-[#333] border-0 text-xs">
                      <SelectValue placeholder="Select model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic</SelectItem>
                      <SelectItem value="advanced">Tiktok Trend</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="creativity" className="text-xs">
                    Creativity
                  </Label>
                  <Slider id="creativity" defaultValue={[70]} max={100} step={1} className="mt-3" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Switch id="apply-immediately" />
                  <Label htmlFor="apply-immediately" className="text-xs">
                    Apply immediately
                  </Label>
                </div>
                <Button
                  onClick={handlePromptSubmit}
                  disabled={isProcessing || !promptText.trim()}
                  className="bg-blue-600 hover:bg-blue-700 text-xs"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                      Processing
                    </>
                  ) : (
                    "Apply Edit"
                  )}
                </Button>
              </div>
            </div>
          </div>

          <div className="border border-[#444] rounded-md p-3">
            <h4 className="text-xs font-medium mb-2">Recent Prompts</h4>
            <div className="space-y-2">
              {[
                "Cut all scenes with less than 3 people",
                "Add slow motion to the action scenes",
                "Create a montage from clips between 2:30-4:15",
              ].map((prompt, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-[#2a2a2a] p-2 rounded text-xs cursor-pointer hover:bg-[#333]"
                  onClick={() => {
                    setPromptText(prompt)
                  }}
                >
                  <span className="truncate">{prompt}</span>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

function SubtitlesPanel({ setVideoSource }) {
  const [subtitleText, setSubtitleText] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [generatedSubtitles, setGeneratedSubtitles] = useState<string[]>([])

  const handleSubtitleGenerate = () => {
    if (!subtitleText.trim()) return

    setIsProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false)
      setGeneratedSubtitles([
        "00:00:05,000 --> 00:00:08,000\nWelcome to our video editing tutorial.",
        "00:00:09,500 --> 00:00:12,500\nToday we'll learn about AI-powered editing.",
        "00:00:14,000 --> 00:00:18,000\nLet's start with prompt-based commands.",
      ])

      // Change video to show subtitles
      setVideoSource(demoVideos.withSubtitles)
    }, 2000)
  }

  return (
    <div className="h-full flex flex-col bg-[#232323] border-l border-[#333]">
      <div className="p-2 border-b border-[#333] flex items-center">
        <MessageSquare className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">Text-to-Video Subtitles</span>
      </div>

      <ScrollArea className="flex-1 p-3">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-4">
              Generate and overlay subtitles automatically from text or by analyzing your video's audio.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="flex-1">
                  <Label htmlFor="subtitle-source" className="text-xs">
                    Source
                  </Label>
                  <Select defaultValue="text">
                    <SelectTrigger id="subtitle-source" className="mt-1 bg-[#333] border-0 text-xs">
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">From Text</SelectItem>
                      <SelectItem value="audio">From Audio</SelectItem>
                      <SelectItem value="translation">Translation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label htmlFor="subtitle-style" className="text-xs">
                    Style
                  </Label>
                  <Select defaultValue="standard">
                    <SelectTrigger id="subtitle-style" className="mt-1 bg-[#333] border-0 text-xs">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="caption">Caption</SelectItem>
                      <SelectItem value="cinematic">Cinematic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="subtitle-text" className="text-xs">
                  Subtitle Text
                </Label>
                <Textarea
                  id="subtitle-text"
                  placeholder="Enter your script or text for subtitles..."
                  className="mt-1 bg-[#333] border-0 text-sm resize-none h-24"
                  value={subtitleText}
                  onChange={(e) => setSubtitleText(e.target.value)}
                />
              </div>

              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Switch id="auto-timing" defaultChecked />
                  <Label htmlFor="auto-timing" className="text-xs">
                    Auto timing
                  </Label>
                </div>
                <Button
                  onClick={handleSubtitleGenerate}
                  disabled={isProcessing || !subtitleText.trim()}
                  className="bg-blue-600 hover:bg-blue-700 text-xs"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                      Generating
                    </>
                  ) : (
                    "Generate Subtitles"
                  )}
                </Button>
              </div>
            </div>
          </div>

          {generatedSubtitles.length > 0 && (
            <div className="border border-[#444] rounded-md p-3">
              <h4 className="text-xs font-medium mb-2">Generated Subtitles</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {generatedSubtitles.map((subtitle, index) => (
                  <div key={index} className="bg-[#2a2a2a] p-2 rounded text-xs">
                    <div className="text-gray-400 mb-1">{subtitle.split("\n")[0]}</div>
                    <div>{subtitle.split("\n")[1]}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-end">
                <Button variant="outline" size="sm" className="text-xs">
                  Apply to Timeline
                </Button>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}

function SoundEffectsPanel({ setVideoSource }) {
  const [isProcessing, setIsProcessing] = useState(false)

  const handleAutoSoundEffect = () => {
    setIsProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false)
      // Change video to show sound effects applied
      setVideoSource(demoVideos.withSoundEffects)
    }, 2000)
  }

  return (
    <div className="h-full flex flex-col bg-[#232323] border-l border-[#333]">
      <div className="p-2 border-b border-[#333] flex items-center">
        <Music className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">Auto Sound Effects</span>
      </div>

      <ScrollArea className="flex-1 p-3">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-4">
              Automatically add appropriate sound effects to your video based on content analysis.
            </p>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="effect-category" className="text-xs">
                    Category
                  </Label>
                  <Select defaultValue="auto">
                    <SelectTrigger id="effect-category" className="mt-1 bg-[#333] border-0 text-xs">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto Detect</SelectItem>
                      <SelectItem value="ambient">Ambient</SelectItem>
                      <SelectItem value="action">Action</SelectItem>
                      <SelectItem value="comedy">Comedy</SelectItem>
                      <SelectItem value="drama">Drama</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="effect-intensity" className="text-xs">
                    Intensity
                  </Label>
                  <Slider id="effect-intensity" defaultValue={[50]} max={100} step={1} className="mt-3" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs">Options</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="background-music" />
                    <Label htmlFor="background-music" className="text-xs">
                      Background Music
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="sound-effects" defaultChecked />
                    <Label htmlFor="sound-effects" className="text-xs">
                      Sound Effects
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="ambient-sounds" defaultChecked />
                    <Label htmlFor="ambient-sounds" className="text-xs">
                      Ambient Sounds
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="voice-enhancement" />
                    <Label htmlFor="voice-enhancement" className="text-xs">
                      Voice Enhancement
                    </Label>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Switch id="preview-effects" />
                  <Label htmlFor="preview-effects" className="text-xs">
                    Preview before applying
                  </Label>
                </div>
                <Button
                  onClick={handleAutoSoundEffect}
                  disabled={isProcessing}
                  className="bg-blue-600 hover:bg-blue-700 text-xs"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                      Analyzing
                    </>
                  ) : (
                    "Add Sound Effects"
                  )}
                </Button>
              </div>
            </div>
          </div>

          <div className="border border-[#444] rounded-md p-3">
            <h4 className="text-xs font-medium mb-2">Sound Library</h4>
            <div className="space-y-2">
              {[
                { name: "Cinematic Whoosh", category: "Transition", duration: "0:02" },
                { name: "Dramatic Impact", category: "Accent", duration: "0:01" },
                { name: "Gentle Ambient", category: "Background", duration: "1:30" },
                { name: "Tech Interface", category: "UI", duration: "0:01" },
              ].map((sound, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-[#2a2a2a] p-2 rounded text-xs cursor-pointer hover:bg-[#333]"
                  onClick={() => {
                    // Apply this sound effect
                    setVideoSource(demoVideos.withSoundEffects)
                  }}
                >
                  <div>
                    <div className="font-medium">{sound.name}</div>
                    <div className="text-gray-400 text-[10px]">{sound.category}</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">{sound.duration}</span>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Play className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

function HighlightsPanel({ setVideoSource }) {
  const [isProcessing, setIsProcessing] = useState(false)

  const handleAutoHighlights = () => {
    setIsProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false)
      // Change video to show highlights
      setVideoSource(demoVideos.highlight)
    }, 2000)
  }

  return (
    <div className="h-full flex flex-col bg-[#232323] border-l border-[#333]">
      <div className="p-2 border-b border-[#333] flex items-center">
        <Sparkles className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">Auto Highlights</span>
      </div>

      <ScrollArea className="flex-1 p-3">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-4">
              Automatically detect and create highlights from your footage based on content, action, or speech.
            </p>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="highlight-type" className="text-xs">
                    Highlight Type
                  </Label>
                  <Select defaultValue="action">
                    <SelectTrigger id="highlight-type" className="mt-1 bg-[#333] border-0 text-xs">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="action">Action Moments</SelectItem>
                      <SelectItem value="speech">Key Dialogue</SelectItem>
                      <SelectItem value="faces">Face Detection</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="highlight-duration" className="text-xs">
                    Target Duration
                  </Label>
                  <Select defaultValue="30">
                    <SelectTrigger id="highlight-duration" className="mt-1 bg-[#333] border-0 text-xs">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 seconds</SelectItem>
                      <SelectItem value="30">30 seconds</SelectItem>
                      <SelectItem value="60">1 minute</SelectItem>
                      <SelectItem value="120">2 minutes</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="highlight-sensitivity" className="text-xs">
                  Detection Sensitivity
                </Label>
                <Slider id="highlight-sensitivity" defaultValue={[65]} max={100} step={1} className="mt-2" />
              </div>

              <div className="space-y-2">
                <Label className="text-xs">Enhancement Options</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="auto-transitions" defaultChecked />
                    <Label htmlFor="auto-transitions" className="text-xs">
                      Auto Transitions
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="color-grading" defaultChecked />
                    <Label htmlFor="color-grading" className="text-xs">
                      Color Grading
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="music-sync" defaultChecked />
                    <Label htmlFor="music-sync" className="text-xs">
                      Music Sync
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="text-overlays" />
                    <Label htmlFor="text-overlays" className="text-xs">
                      Text Overlays
                    </Label>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Switch id="create-sequence" defaultChecked />
                  <Label htmlFor="create-sequence" className="text-xs">
                    Create new sequence
                  </Label>
                </div>
                <Button
                  onClick={handleAutoHighlights}
                  disabled={isProcessing}
                  className="bg-blue-600 hover:bg-blue-700 text-xs"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                      Generating
                    </>
                  ) : (
                    "Generate Highlights"
                  )}
                </Button>
              </div>
            </div>
          </div>

          <div className="border border-[#444] rounded-md p-3">
            <h4 className="text-xs font-medium mb-2">Detected Highlights</h4>
            <div className="space-y-2">
              {[
                { time: "00:01:23 - 00:01:35", type: "Action", confidence: "High" },
                { time: "00:02:47 - 00:02:59", type: "Dialogue", confidence: "Medium" },
                { time: "00:04:12 - 00:04:22", type: "Action", confidence: "High" },
                { time: "00:07:05 - 00:07:18", type: "Faces", confidence: "High" },
              ].map((highlight, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-[#2a2a2a] p-2 rounded text-xs cursor-pointer hover:bg-[#333]"
                  onClick={() => {
                    // Preview this highlight
                    setVideoSource(demoVideos.highlight)
                  }}
                >
                  <div>
                    <div className="font-medium">{highlight.time}</div>
                    <div className="text-gray-400 text-[10px]">{highlight.type}</div>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`text-xs mr-2 ${
                        highlight.confidence === "High"
                          ? "text-green-400"
                          : highlight.confidence === "Medium"
                            ? "text-yellow-400"
                            : "text-red-400"
                      }`}
                    >
                      {highlight.confidence}
                    </span>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Eye className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => setVideoSource(demoVideos.highlight)}
              >
                Apply Selected
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
