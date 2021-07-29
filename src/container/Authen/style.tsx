import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '320px',
        height: 'auto',
        color: '#4A4A4A'
    },
    jss8: {
        marginTop: '32px',
        textAlign: 'center',
        fontWeight: 500,
        fontSize: '2.9rem',
    },
    jss9: {
        marginTop: '32px',
        textAlign: 'center',
        fontWeight: 500,
        fontSize: '2rem',
    },
    tab:{
        width: '100%',
    },
    tabv:{
        width: '50%',
    },
    TextField :{
        marginTop: '30px',
    },
    btnLogin:{
        backgroundColor: '#536DFE',
    },
    box_btn:{
        display : "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop : '30px'
    },
    copy_right:{
        color: "#536DFE",
        height: '20px',
        position : "absolute",
        bottom: 16,
        
    },
    box_or :{
        height: '50px',
        display :"flex",
        position :'relative',
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:'20px'
    },
    box_netdut:{
        width: '40%'
    },
    netdut : {
        height: '1px',
        backgroundColor: '#e6ebf1',
    },
    textOr:{
        marginTop: '12px'
    },
    btn_Google:{
        width: '100%',
        marginTop:'20px',
        textTransform: 'none',
        backgroundColor: 'white',
        border: 'none',
        padding: '10px',
        marginBottom:'10px',
        webkitBoxShadow: "0px 3px 11px  0px #e8eafc",
        mozBoxShadow: "1px 3px 1px #b2b2b21a",
        boxShadow: "0px 3px 11px 0px #e8eafc, 0 3px 3px -2px #b2b2b21a, 0 1px 8px 0 #9a9a9a1a",
        '&:hover': {
            backgroundColor: 'rgba(74, 74, 74, 0.04)',
        },
    },
    img_Google:{
        width: '30px',
        height: '30px',
        marginRight: '15px'
    },
    submit_account:{
        width: '100%',
        marginTop: '20px',
        marginBottom: '20px'
    }
}));
