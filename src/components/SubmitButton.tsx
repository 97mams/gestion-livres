import { Button } from "./ui/button"

export const SubmitButton = (props: { text: string, pending: boolean, classname?: string }) => {
    return (
        <Button
            className={props.classname}
            type="submit"
        >
            {props.pending ? "... connecté" : props.text}
        </Button>
    )
}