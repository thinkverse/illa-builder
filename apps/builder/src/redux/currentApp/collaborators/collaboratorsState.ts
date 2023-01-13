export interface CollaboratorsInfo {
  id: string | number
  nickname: string
  avatar: string
}

export interface CollaboratorsState {
  components: Record<string, CollaboratorsInfo[]> | string[]
  inRoomUsers: CollaboratorsInfo[]
}

export const CollaboratorsInitialState: CollaboratorsState = {
  inRoomUsers: [],
  components: {},
}
