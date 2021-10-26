import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FormattedMessage } from 'react-intl';

import inProcessProyects from '../../proyects/underConstruction.json';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

const Proyects = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          width: '100%',
          backgroundColor: theme.palette.background.paper,
        },
      }));

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <div className="ProyectsContainer">
            <div className="ProyectsHome">
                <span className="EspecialTxt">
                    <FormattedMessage 
                      id="app.branchObjetive"
                      defaultMessage="La Página Que Deseas..."
                    />
                </span>
            </div>
            <div className="ProyectsHome">
                <AppBar position="relative">
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    >
                    <Tab label="Finalizados" {...a11yProps(0)} />
                    <Tab label="En Proceso" {...a11yProps(1)} />
                    <Tab label="De Terceros" {...a11yProps(2)} />
                    <Tab label="¿Quieres Unirte a la familia?" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <div className="AlignProyectsCells">
                    <div className="NotNowProyects">
                      <p>
                        <FormattedMessage 
                          id="proyects.NotNowMessage"
                          defaultMessage="Aun no tenemos proyectos para mostrarte." 
                        />
                      </p>
                      <i className="fas fa-sad-cry"></i>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className="AlignProyectsCells">
                    {inProcessProyects.map(e =>
                      <div className="ProyectsCells"  key={e.id}>
                        <div className="ColorContainerProyectsCells" id={e['branch.name']}>
                          <div className="ProyectsCellsLogo">
                            <img src={e.logo} alt={e['branch.name']} />
                          </div>
                          <div className="ProyectsCellsTxt">
                            <h3 className="EspecialTxt">{e['branch.name']}</h3>
                            <p>{e['branch.description']}</p>
                          </div>
                          <Link to={e.url} className="btnGeneral">Saber Más</Link>
                        </div>
                      </div>
                    ) }
                  </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <div className="AlignProyectsCells">
                    <div className="NotNowProyects">
                      <p>
                        <FormattedMessage 
                          id="proyects.NotNowMessage"
                          defaultMessage="Aun no tenemos proyectos para mostrarte." 
                        />
                      </p>
                      <i className="fas fa-sad-cry"></i>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <div className="AlignProyectsCells">
                    <div className="NotNowProyects">
                        <p className="JoinUs">Si lo que buscas es integrarte a nuestra organización...</p>
                        <p>Envianos un correo a: </p><br/>
                        <a className="EmailLink" href="mailto:blurpleehelp@gmail.com">blurpleehelp@gmail.com</a><br/>
                        <p>Solo necesitaremos tu nombre, apellido, la idea que tienes en mente y ganas de hacer algo grande.</p>
                    </div>
                  </div>
                </TabPanel>
            </div>
        </div>
    )
}

export default Proyects;