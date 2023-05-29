import { Box, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'


const useStyle=makeStyles({
    contentWrapper:
  {
    padding:'140px 175px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'grey'
  },
  left:
  {
    display:'flex',
    justifyContent:'center',
    width:'455px',    
  },
  imageWrapper:
  {
    backgroundImage:'url("./assets/Frame 1000003898.png")',
    backgroundRepeat:'no-repeat',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  image:
  {
    position:'relative',
    right:'10px',
    bottom:'10px',   
  },
  authName:{
    color:'#FDFCFC',
    marginBottom:'50px',
  
  },
  vocal:{
    color:' #FDFCFC'
  },
  title:
  {
    Width:'265.87px',
    Height:'188.78px',
    color:'#FFFFFF',
    // marginTop:'20px'
  },
  right:{
    marginLeft:'20.26px',
    width:'455px',
    // backgroundColor:'yellow',


  },
  rightHeading:
  {
    width: '454.74px',
    height: '338px',
    color:' rgba(255, 255, 255, 0.9)',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '17px',
    lineHeight: '26px',
  },
  nameContainer:
  {
        marginLeft:'29.14px',
  },
  nameImage:
  {
    marginTop:'-20px',
     marginBottom:'30px'
  }
})


const ContentPage = () => {
  return (
    
    <Box className={classes.contentWrapper}>
    <Box className={classes.left}>
     <Box className={classes.imageWrapper}   >
      <img className={classes.image} src='./assets/Rectangle 22859 (1).svg'/>      

     </Box>
     <Box className={classes.nameContainer} >
     <Box className={classes.nameImage}>
      <Typography className={classes.authName}>Apoorva Gokhale<span>(vocal)</span></Typography>
      <img src='./assets/Fill-35.svg'/>
      
      </Box>
      <Typography className={classes.title}>Born in the family of traditional legendary musicians, Apoorva Gokhale has carved a niche for herself as one of the sought after well-known vocalists of the younger generation with a firm background of Gwalior Gharana. </Typography>
     </Box>
     </Box>

    <Box className={classes.right}>
      <Typography className={classes.rightHeading}>She has an impressive musical lineage and has proudly and responsibly inherited the musical qualities from her grandfather, the late Gayanacharya Pandit Gajananrao Joshi and her great- grandfather Pandit Antubua Joshi, an eminent court musician in the erstwhile state of Aundh, district Satara. At a very tender age of five, she initially received a sound grooming from her grandfather Pandit Gajananrao Joshi, who insisted to see in her tonal perfection with just intonation and infused a keen sense of rhythm. Later on she received rigorous training in the form of guru-shishya parampara under the guidance and supervision of her uncle Pandit Madhukarrao Joshi, an eminent vocalist and violinist.</Typography>
    </Box>
    </Box>
  )
}

export default ContentPage