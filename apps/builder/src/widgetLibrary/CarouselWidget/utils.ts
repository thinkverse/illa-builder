import { v4 } from "uuid"
import {
  CarouselSettings,
  MappedCarouselData,
} from "@/widgetLibrary/CarouselWidget/interface"

export const generateItemId = () => `Image-${v4()}`

export const formatData = (mappedData: MappedCarouselData) => {
  const url = mappedData.urls ?? []
  const label = mappedData.labels ?? []
  const hidden = mappedData.isHidden ?? []
  const disables = mappedData.disables ?? []
  const events = mappedData.events ?? []

  const maxLength = Math.max(
    url.length,
    label.length,
    hidden.length,
    disables.length,
  )
  const options: CarouselSettings[] = []
  for (let i = 0; i < maxLength; i++) {
    options.push({
      id: generateItemId(),
      url: url[i],
      label: label[i],
      hidden: hidden[i],
      disabled: disables[i],
    })
  }
  return options
}
