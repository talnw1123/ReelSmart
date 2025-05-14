"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Wand2, MessageSquare, Music, Sparkles, Clock, Loader2, Play, Eye } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AIPanel() {
  const [promptText, setPromptText] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [subtitleText, setSubtitleText] = useState("")
  const [generatedSubtitles, setGeneratedSubtitles] = useState<string[]>([])

  const handlePromptSubmit = () => {
    if (!promptText.trim()) return

    setIsProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false)
      // Here you would normally handle the response from the AI
      console.log("Processing prompt:", promptText)
    }, 2000)
  }

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
    }, 2000)
  }

  const handleAutoSoundEffect = () => {
    setIsProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false)
      // Here you would normally handle the response from the AI
    }, 2000)
  }

  const handleAutoHighlights = () => {
    setIsProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false)
      // Here you would normally handle the response from the AI
    }, 2000)
  }

  return (
    <div className="h-full flex flex-col bg-[#232323] border-l border-[#333]">
      <div className="p-2 border-b border-[#333] flex items-center">
        <Wand2 className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">AI Assistant</span>
      </div>

      <Tabs defaultValue="prompt-editing" className="flex-1 flex flex-col">
        <TabsList className="w-full bg-[#333] rounded-none px-2 h-9">
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

        <ScrollArea className="flex-1">
          <TabsContent value="prompt-editing" className="p-3 m-0 h-full">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Prompt-Based Editing</h3>
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
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
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
                    "Add dramatic music to the interview section",
                    "Create a montage from clips between 2:30-4:15",
                  ].map((prompt, index) => (
                    <div key={index} className="flex justify-between items-center bg-[#2a2a2a] p-2 rounded text-xs">
                      <span className="truncate">{prompt}</span>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Clock className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="subtitles" className="p-3 m-0">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Text-to-Video Subtitles</h3>
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
          </TabsContent>

          <TabsContent value="sound-effects" className="p-3 m-0">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Auto Sound Effects</h3>
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
                    <div key={index} className="flex justify-between items-center bg-[#2a2a2a] p-2 rounded text-xs">
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
          </TabsContent>

          <TabsContent value="highlights" className="p-3 m-0">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Auto Highlights</h3>
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
                    <div key={index} className="flex justify-between items-center bg-[#2a2a2a] p-2 rounded text-xs">
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
                  <Button variant="outline" size="sm" className="text-xs">
                    Apply Selected
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  )
}
