// Create an interface for our tab menu
interface IBoardItem {
  title: string;
}
// Create a menu tab with an array of objects
export const BOARD_ITEM: IBoardItem[] = [
  {
    title: "Заметки",
  },
  {
    title: "Консультации",
  },
  {
    title: "Видео",
  },
  {
    title: "Мероприятия",
  },
  {
    title: "Новая заметка",
  },
]