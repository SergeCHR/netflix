import { useContent } from "../hooks/use-content"
import selectionFilter from "../utils/selection-map"

export const Browse = () => {
    const {series} = useContent('series')
    const {films} = useContent('films')
    const slides = selectionFilter({series, films});
    console.log(slides);
    return <p>text</p>
}