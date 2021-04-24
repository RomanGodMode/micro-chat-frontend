export const generateRoomId = (roomName: string): string => (
  roomName + "-" + Date.now()
)
// интересно, заплюют ли меня за это кислотой?
//я про скобочки