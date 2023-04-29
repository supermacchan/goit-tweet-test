import { List, Button } from "./Filter.styled";

const Filter = () => {
    return (
        <List>
            {/* map li from filter options */}

            {/* temp */}
            <li>
                <Button type="button">
                    show all
                </Button>
            </li>
            <li>
                <Button type="button">
                    follow
                </Button>
            </li>
            <li>
                <Button type="button">
                    followings
                </Button>
            </li>
        </List>
    )
}

export default Filter;