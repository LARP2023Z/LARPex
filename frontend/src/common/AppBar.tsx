import {FC, useState} from "react";
import {AppBar, Button, TextInput, Toolbar} from "react95";

export const MyAppBar: FC = () => {
    const [open, setOpen] = useState(false);

    return (
            <AppBar style={{
                top:"auto",
                left:0,
                bottom: 0,
                position: "absolute",
            }}>
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <div style={{position: 'relative', display: 'inline-block'}}>
                        <Button
                            onClick={() => setOpen(!open)}
                            active={open}
                            style={{fontWeight: 'bold'}}
                        >
                            <img
                                // src={logoIMG}
                                alt='LARPex'
                                style={{height: '20px', marginRight: 4}}
                            />
                            Start
                        </Button>
                    </div>

                    <TextInput placeholder='Search...' width={150}/>
                </Toolbar>
            </AppBar>
    )
}
