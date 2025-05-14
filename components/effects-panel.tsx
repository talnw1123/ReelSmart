"use client"

import { ChevronDown } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"

interface EffectsPanelProps {
  brightness: number
  setBrightness: (value: number) => void
  contrast: number
  setContrast: (value: number) => void
  saturation: number
  setSaturation: (value: number) => void
  temperature: number
  setTemperature: (value: number) => void
  tint: number
  setTint: (value: number) => void
}

export default function EffectsPanel({
  brightness,
  setBrightness,
  contrast,
  setContrast,
  saturation,
  setSaturation,
  temperature,
  setTemperature,
  tint,
  setTint,
}: EffectsPanelProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="p-2 border-b border-[#333]">
        <h3 className="text-sm font-medium px-2 py-1">Effect Controls</h3>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs">Source - Javier BTS Coffee Shoot...</div>
            <ChevronDown className="h-4 w-4" />
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="text-xs">Color Effects</div>
            <ChevronDown className="h-4 w-4" />
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-medium">Basic Correction</div>
              <Checkbox checked={true} />
            </div>

            <div className="mb-3">
              <div className="flex items-center justify-between mb-1">
                <div className="text-xs">Input LUT</div>
                <div className="text-xs text-gray-400">None</div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-3">
              <div className="text-xs">Intensity</div>
              <div className="flex items-center gap-2">
                <Slider defaultValue={[50]} max={100} step={1} className="w-32" />
                <div className="text-xs text-blue-400">50.0</div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <ChevronDown className="h-4 w-4 mr-1" />
              <div className="text-xs font-medium">Color</div>
            </div>

            <div className="pl-5">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs">White Balance</div>
                <div className="h-4 w-4 bg-white rounded-sm"></div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="text-xs">Temperature</div>
                <div className="flex items-center gap-2">
                  <Slider
                    value={[temperature + 50]}
                    max={100}
                    step={1}
                    className="w-32"
                    onValueChange={(value) => setTemperature(value[0] - 50)}
                  />
                  <div className="text-xs text-blue-400">{temperature.toFixed(1)}</div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="text-xs">Tint</div>
                <div className="flex items-center gap-2">
                  <Slider
                    value={[tint / 3.6 + 50]}
                    max={100}
                    step={1}
                    className="w-32"
                    onValueChange={(value) => setTint((value[0] - 50) * 3.6)}
                  />
                  <div className="text-xs text-blue-400">{tint.toFixed(1)}</div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="text-xs">Saturation</div>
                <div className="flex items-center gap-2">
                  <Slider
                    value={[saturation + 70]}
                    max={100}
                    step={1}
                    className="w-32"
                    onValueChange={(value) => setSaturation(value[0] - 70)}
                  />
                  <div className="text-xs text-blue-400">{saturation + 100}.0</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <ChevronDown className="h-4 w-4 mr-1" />
              <div className="text-xs font-medium">Light</div>
            </div>

            <div className="pl-5">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs">Exposure</div>
                <div className="flex items-center gap-2">
                  <Slider
                    value={[brightness + 45]}
                    max={100}
                    step={1}
                    className="w-32"
                    onValueChange={(value) => setBrightness(value[0] - 45)}
                  />
                  <div className="text-xs text-blue-400">{((brightness / 100) * -1).toFixed(1)}</div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="text-xs">Contrast</div>
                <div className="flex items-center gap-2">
                  <Slider
                    value={[contrast + 50]}
                    max={100}
                    step={1}
                    className="w-32"
                    onValueChange={(value) => setContrast(value[0] - 50)}
                  />
                  <div className="text-xs text-blue-400">{contrast.toFixed(1)}</div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="text-xs">Highlights</div>
                <div className="flex items-center gap-2">
                  <Slider defaultValue={[30]} max={100} step={1} className="w-32" />
                  <div className="text-xs text-blue-400">-19.2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
