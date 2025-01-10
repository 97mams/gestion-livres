export const SubmitButton = (props: { text: string, pending: boolean }) => {
    return (
        <button
            className="mt-4 border border-primary text-primary px-3 py-1 rounded-xl hover:bg-primary/20"
        >
            {props.pending ? "Loading..." : props.text}
        </button>
    )
}