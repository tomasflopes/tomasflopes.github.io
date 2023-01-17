export default function toLink(text: string): string {
  return text.replace(/ /g, "-").toLowerCase();
}
