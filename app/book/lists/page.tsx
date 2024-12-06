import Card from "@mui/material/Card"
import CardTitle from "@mui/material/Card"
import Button from "@mui/material/Button"
import Input from "@mui/material/Input"

export default function Page() {
    return (
        <div>
            <Button color="primary" variant="outlined">Click</Button>
            <Input placeholder="mamisoa" className="bg-input rounded-md" />
            <Card className="bg-card text-card-foreground">
                <CardTitle>Mamisoa</CardTitle>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque sapiente eum sunt eius, quaerat iusto autem nam ut laboriosam animi, explicabo nihil eveniet magnam a temporibus sed similique distinctio. Vel?
                <Button color="secondary" variant="outlined">Card</Button>
            </Card>
        </div >
    )
}