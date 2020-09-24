import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

type CustomizedMenusType = {
    onThemeChange:(kindOfTheme:string)=>void
}

export default function CustomizedMenus(props:CustomizedMenusType) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [theme , setTheme] = useState<string>('bright')

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);

    };

    let onClicker = (theme:string) => {
       setTheme(theme);
        props.onThemeChange(theme)
        handleClose()
    }


    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="outlined"
                color= {theme === "middle"?'inherit':'primary'}
                onClick={handleClick}
            >Theme menu
            </Button>

            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem onClick={()=>{onClicker('dark')}}>
                    <ListItemIcon>
                        <Brightness2Icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="DARK" />
                </StyledMenuItem>

                <StyledMenuItem onClick={()=>{onClicker('middle')}}>
                    <ListItemIcon>
                        <Brightness4Icon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="MIDDLE" />
                </StyledMenuItem>

                <StyledMenuItem onClick={()=>{onClicker('light')}}>
                    <ListItemIcon>
                        <Brightness5Icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="BRIGHT"  />
                </StyledMenuItem>

            </StyledMenu>

        </div>
    );
}