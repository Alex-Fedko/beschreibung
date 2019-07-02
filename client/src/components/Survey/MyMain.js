import React from 'react';
//import PropTypes, { instanceOf } from 'prop-types';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import {
    FormHelperText,
  } from '../../lib/components/uielements/form';
import TextField from './../../lib/components/uielements/textfield';

import BasicDataForm from './BasicData';
import ClientInvoiceAddressForm from './ClientInvoiceAddress';
import ContactPersonForm from './ContactPerson';
import LoadingPointForm from './LoadingPoint';
import LoadingPointSecondForm from './LoadingPointSecond';
import LoadingPointAdditionalForm from './LoadingPointAdditional';
import UnloadingPointForm from './UnloadingPoint';
import LinearProgress from '@material-ui/core/LinearProgress';
import SelectComponent from './SelectComponent';
import jss from 'jss';
import $ from 'jquery';

import LayoutWrapper from '../../lib/components/utility/layoutWrapper';
import Papersheet from '../../lib/components/utility/papersheet';
import { FullColumn } from '../../lib/components/utility/rowColumn';
import { FormsComponentWrapper, FormsMainWrapper } from './forms.style';

const styles = theme => ({
    root: {
      width: '100%',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    },
    progress: {
      marginLeft: theme.spacing(1),
      minWidth: '296px',
      marginTop: '24px',
      marginRight: '20px',
      backgroundColor: '#DDD'
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100px'
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    formControl: {
      margin: theme.spacing(1),
      width: '97%',
    },
    textField: {
      width: '100%',
    },
});

var surveyDatas = {
    data: [
        {
            type: 'radio',
            question: "Which type of project is that?",
            plans: ['Disposal request', 'Disposal of single items', 'Removal request', 'Transport request'],
            id: 'id_radio_project_type',
            value: '',
            cango: 0,   //0:first, 1:not valid, 2:valid
        },
        
        {
            type: 'radio',
            question: "What is the reason for this project?",
            plans: ['Die case', 'Nursing case', 'Other'],
            id: 'id_radio_project_reason',
            value: '',
            cango: 0,   
        },

        {
            type: 'radio',
            question: "Client Type?",
            plans: ['Private person', 'Company', 'Public Institution'],
            id: 'id_client_type',
            value: '',
            cango: 0,   
          },
          
          {
            type: 'radio',
            question: "Who will pay the cost of this project?",
            plans: ['Company', 'Health Insurance', 'Insurance', 'Public Institution', 'Self-Payers'],
            id: 'id_project_payer',
            value: '',
            cango: 0
          },
/*
        {
            type: 'component',
            name: 'Basic Data',
            earliest: Date.now(),
            latest: Date.now(),
            id: 'id_basic_data_form',
            cango: 2
        },
*/
        {
            type: 'text',
            question: "What exactly is to be done?",
            id: 'id_text_exactly_to_be_done',
            value: '',
            cango: 0
        },
    
        {
            type: 'text',
            question: "Description of the items",
            id: 'id_text_item_description',
            value: '',
            cango: 0
        },
    
        {
            type: 'text',
            question: "Arrangements",
            id: 'id_arrangements',
            value: '',
            cango: 0
        },

        {
            type: 'component',
            name: 'Client Invoice Address',
            id: 'id_client_invoice_address_form',
            
            data: {
                company_name: '',
                salutation: '',
                first_name: '',
                sur_name: '',
                street: '',
                postcode: '',
                city: '',
                telno: '',
                email: '',
                checkbox_flag: false,
            },
            cango: 0
        },

        {
            type: 'component',
            name: 'Contract person by the place',
            id: 'id_contract_person_by_the_place',
            data: {
                cpp_salutation: '',
                cpp_first_name: '',
                cpp_sur_name: '',
                cpp_telno: '',
                cpp_email: '',
            },
            cango: 0
        },
        
        {
            type: 'radio',
            question: "What kind of object is it?",
            plans: ['apartment', 'house', 'Commercial property', 'garage', 'attic', 'basement', 'kitchen', 'other'],
            id: 'id_radio_object_kind',
            value: '',
            cango: 0
        },
        
        {
            type: 'component',
            name: 'Loading Point',
            id: 'id_loading_point_page',
            data: {
                lp_addr: '',
                lp_bell_name: '',
                lp_streetname: '',
                lp_postcode: '',
                lp_city: '',
            },
            cango: 0
        },
        
        {
            type: 'component',
            name: 'Loading Point Second',
            id: 'id_loading_point_page2',
            data: {
                lp2_total_area_object: '',
                lp2_total_number_of_rooms: '',
                lp2_ceiling_height: '',
                lp2_level_nums: '',
                lp2_ceiling_height2: '',
                lp2_total_removal_path: '',
            },
            cango: 0
        },
        
        {
            type: 'radio',
            question: "To what % are the rooms filled?",
            plans: ['10', '20', '30'],
            id: 'id_radio_room_percent',
            value: '',
            cango: 0
        },
        
        {
            type: 'radio',
            question: "How many floors are there?",
            plans: ['10', '20', '30'],
            id: 'id_radio_floor_nums',
            value: '',
            cango: 0
        },
        
        {
            type: 'radio',
            question: "Is an elevator available?",
            plans: ['YES', 'NO'],
            id: 'id_radio_elevator_flag',
            value: '',
            cango: 0
        },
        
        {
            type: 'radio',
            question: "How big is the elevator?",
            plans: ['Small', 'Big'],
            id: 'id_radio_elevator_size_flag',
            value: ''
        },
        
        {
            type: 'radio',
            question: "Is a no-stop zone needed?",
            plans: ['YES', 'NO'],
            id: 'id_radio_no_stop_zone_flag',
            value: '',
            cango: 0
        },
        
        {
            type: 'radio',
            question: "Are there any additional storage",
            plans: ['YES', 'NO'],
            id: 'id_radio_additional_storage_flag',
            value: '',
            cango: 0
        },
        
        {
            type: 'text',
            question: "Information about additional storage areas",
            id: 'id_text_additional_storage_areas',
            value: '',
            cango: 0
        },
        
        {
            type: 'radio',
            question: "How many floors did the other storage areas count together?",
            plans: ['5', '10', '20', '30'],
            id: 'id_radio_floors_storage_nums',
            value: '',
            cango: 0
        },
        
        {
            type: 'radio',
            question: "To what % are the other storage areas filled?",
            plans: ['100', '200'],
            id: 'id_radio_other_storage_area_percent',
            value: '',
            cango: 0
        },
        
        {
            type: 'component',
            name: 'Additional Storage Areas(loading point)',
            id: 'id_additional_storage_area_page',
            data: {
                asa_additional_storage_space: '',
                asa_total_additional_storage_space: '',
            },
            cango: 0
        },
        
        {
            type: 'component',
            name: 'Unloading Point',
            id: 'id_unloading_point_page',
            data: {
                up_saved_addr: '',
                up_bell_name: '',
                up_house_number: '',
                up_postcode: '',
                up_city: '',
                up_level_nums: '',
                up_total_removal_path: '',
            },
            cango: 0
        },
        
        {
            type: 'radio',
            question: "Are there any additional storage",
            plans: ['YES', 'NO'],
            id: 'id_radio_any_additional_storage_flag',
            value: '',
            cango: 0
        },
        
        {
            type: 'text',
            question: "Information about additional storage areas",
            id: 'id_text_addtional_storage_area',
            value: '',
            cango: 0
        },
        
        {
            type: 'radio',
            question: "How many floors did the other storage areas count together?",
            plans: ['5', '10', '20', '30'],
            id: 'id_radio_other_floors_storage_nums',
            value: '',
            cango: 0
        },
    ],
}

class MyMainForm extends React.Component {
    state = {
        activeStep: 0,
    };
    
    showPage = (step,idx) => {
        const { classes } = this.props;
        //const { data } = this.state;
        //console.log(idx,surveyDatas[idx]);
        if (step.type === 'radio') {
            return (
                <SelectComponent data={{
                    question: step.question,
                    plans: step.plans,
                    id: step.id,
                    value: surveyDatas.data[idx].value,
                    cango: surveyDatas.data[idx].cango}} 
                    callbackHandling = {this.handleRadioChanged}
                    key={step.id}
                />
            );
        }

        if (step.type === 'text') {
            return (
                <FormControl className={classes.formControl}>
                    <Typography style={{fontSize: 20, fontWeight: 500}}>{step.question}</Typography>
                    <TextField
                        id={step.id}
                        label={step.question}
                        multiline
                        rows="5"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value={step.value}
                        onChange = {this.handleTextFieldChanged}
                        key={step.id}
                        cango={surveyDatas.data[idx].cango}
                    />
                    <FormHelperText 
                        style={step.cango === 1 ? {display: 'block',color:'#ff0000'} :{display: 'none'} }>
                            You must input the proper value.
                    </FormHelperText>
                </FormControl>
            )
        }

        switch (step.name) {
            case 'Basic Data':
                return (<BasicDataForm 
                            data={step}
                            callbackUpdate={this.handleBasicDataUpdate} 
                            key={step.id}
                        />);
            case 'Client Invoice Address':
                return (<ClientInvoiceAddressForm 
                            setMyFunction={click => this.myParentFunction = click}
                            data={step.data}
                            typeofclient={surveyDatas.data[2].value}
                            onChangeData={this.handleInvoiceFormUpdate} 
                            key={step.id}
                        />);
            case 'Contract person by the place':
                return (<ContactPersonForm
                            data={step.data} 
                            onChangeData={this.handleInvoiceFormUpdate} 
                            key={step.id}
                        />);

            case 'Loading Point':
                return (<LoadingPointForm
                            data={step.data}
                            onChangeData={this.handleInvoiceFormUpdate}
                            key={step.id}
                        />);

            case 'Loading Point Second':
                return (<LoadingPointSecondForm
                            data={step.data}
                            onChangeData={this.handleInvoiceFormUpdate}
                            key={step.id}
                        />);
            case 'Additional Storage Areas(loading point)':
                return (<LoadingPointAdditionalForm 
                            data={step.data}
                            onChangeData={this.handleInvoiceFormUpdate}
                            key={step.id}
                        />);
            case 'Unloading Point':
                return (<UnloadingPointForm 
                            data={step.data}
                            onChangeData={this.handleInvoiceFormUpdate}
                            key={step.id}
                        />);
            default:
              return 'Unknown step';
        }
    };

    handleBack = (ev) => {
        ev.preventDefault();
        const { activeStep } = this.state;
        this.setState({activeStep: activeStep - 1});
    };

    handleNext = (ev) => {
        ev.preventDefault();
        const { activeStep } = this.state;

        if (activeStep === surveyDatas.data.length - 1){
            return;
        }
        //var alldata = surveyDatas.data;
        var dt = surveyDatas.data[activeStep];

        //check need to validation for Component Pages
        if (dt.id === 'id_client_invoice_address_form'){
            this.myParentFunction();
            if (dt.cango === 2){
                //daria 
                if (dt.data.checkbox_flag === true){
                    surveyDatas.data[activeStep+1].data.cpp_first_name = dt.data.first_name;
                    surveyDatas.data[activeStep+1].data.cpp_sur_name = dt.data.sur_name;
                    surveyDatas.data[activeStep+1].data.cpp_email = dt.data.email;
                    surveyDatas.data[activeStep+1].data.cpp_telno = dt.data.telno;
                }
                
                this.setState({activeStep: activeStep + 1});
            }
            else{
                this.setState({activeStep: activeStep});
                if (dt.data.company_name === '')
                    $('#cia_company_name').focus();
                else if (dt.data.first_name === '')
                    $('#cia_first_name').focus();
                else if (dt.data.sur_name === '')
                    $('#cia_sur_name').focus();
                else if (dt.data.street === '')
                    $('#cia_street').focus();
                else if (dt.data.postcode === '')
                    $('#cia_postcode').focus();
                else if (dt.data.city === '')
                    $('#cia_city').focus();
                else if (dt.data.telno === '')
                    $('#cia_telephone').focus();
                else if (dt.data.email === '')
                    $('#cia_email').focus();
            }
            return;
        }

        if (dt.id === 'id_contract_person_by_the_place'){
            if (dt.cango === 2)
                this.setState({activeStep: activeStep + 1});
            else {
                this.setState({activeStep: activeStep});
                if (dt.data.cpp_first_name === '')
                    $('#cpp_firstName').focus();
                else if (dt.data.cpp_sur_name === '')
                    $('#cpp_lastName').focus();
                else if (dt.data.cpp_telno === '')
                    $('#cpp_telephone').focus();
                else if (dt.data.cpp_email === '')
                    $('#cpp_email').focus();
            }
            return;
        }

        if (dt.id === 'id_loading_point_page'){
            if (dt.cango === 2)
                this.setState({activeStep: activeStep + 1});
            else {
                this.setState({activeStep: activeStep});
                
                if (dt.data.lp_bell_name === '')
                    $('#lp_bell_name').focus();
                else if (dt.data.lp_streetname === '')
                    $('#lp_streetname').focus();
                else if (dt.data.lp_postcode === '')
                    $('#lp_postcode').focus();
                else if (dt.data.lp_city === '')
                    $('#lp_city').focus();
            }
            return;
        }

        if (dt.id === 'id_loading_point_page2'){
            if (dt.cango === 2)
                this.setState({activeStep: activeStep + 1});
            else {
                this.setState({activeStep: activeStep});
                
                if (dt.data.lp2_total_area_object === '')
                    $('#lp2_total_area_object').focus();
                else if (dt.data.lp2_total_number_of_rooms === '')
                    $('#lp2_total_number_of_rooms').focus();
                else if (dt.data.lp2_ceiling_height === '')
                    $('#lp2_ceiling_height').focus();
                else if (dt.data.lp2_level_nums === '')
                    $('#lp2_level_nums').focus();
                else if (dt.data.lp2_ceiling_height2 === '')
                    $('#lp2_ceiling_height2').focus();
                else if (dt.data.lp2_total_removal_path === '')
                    $('#lp2_total_removal_path').focus();
            }
            return;
        }

        if (dt.id === 'id_additional_storage_area_page'){
            if (dt.cango === 2)
                this.setState({activeStep: activeStep + 1});
            else {
                this.setState({activeStep: activeStep});
                
                if (dt.data.asa_additional_storage_space === '')
                    $('#asa_additional_storage_space').focus();
                else if (dt.data.asa_total_additional_storage_space === '')
                    $('#asa_total_additional_storage_space').focus();
            }
            return;
        }

        if (dt.id === 'id_unloading_point_page'){
            if (dt.cango === 2)
                this.setState({activeStep: activeStep + 1});
            else {
                this.setState({activeStep: activeStep});
                
                if (dt.data.up_bell_name === '')
                    $('#up_bell_name').focus();
                else if (dt.data.up_house_number === '')
                    $('#up_house_number').focus();
                else if (dt.data.up_postcode === '')
                    $('#up_postcode').focus();
                else if (dt.data.up_city === '')
                    $('#up_city').focus();
                else if (dt.data.up_level_nums === '')
                    $('#up_level_nums').focus();
                else if (dt.data.up_total_removal_path === '')
                    $('#up_total_removal_path').focus();
            }
            return;
        }

        if (surveyDatas.data[activeStep].cango === 2){
            this.setState({activeStep: activeStep + 1});
        }
        else{
            if (dt.cango === 0) dt.cango = 1;
            surveyDatas.data = surveyDatas.data.map(
                entry => dt.id === entry.id
                ? {...entry, ...dt}
                : entry
            );
            this.setState({activeStep: activeStep});
        }
    };

    handleRadioChanged = (selectedVal) => {
        surveyDatas.data = surveyDatas.data.map(
            entry => selectedVal.id === entry.id
            ? {...entry, ...selectedVal}
            : entry);
    };

    handleTextFieldChanged = (ev) => {
        var el = surveyDatas.data[this.state.activeStep];
        el.value = ev.target.value;

        el.value !== '' ? el.cango=2 : el.cango = 1;
        surveyDatas.data = surveyDatas.data.map(
            entry => el.id === entry.id
            ? {...entry, ...el}
            : entry
        );
        this.setState({activeStep: this.state.activeStep});
    };

    //update Earliest & Latest Date from Basic Data Form
    handleBasicDataUpdate = (earliest,latest) => {
        //var data = surveyDatas.data;
        var el = surveyDatas.data[this.state.activeStep];
        el.earliest = earliest;
        el.latest = latest;
        surveyDatas.data = surveyDatas.data.map(
            entry => el.id === entry.id
            ? {...entry, ...el}
            : entry
        );
    };

    //update data from Invoice Form
    handleInvoiceFormUpdate = (datas,cango) => {
        var data = surveyDatas.data;
        var el = surveyDatas.data[this.state.activeStep];
        el.cango = cango;
        el.data = datas;

        data = data.map(
            entry => el.id === entry.id
            ? {...entry, ...el}
            : entry
        );
        surveyDatas.data = data;
    }

    handleChangeData = (val) => {
        var el = surveyDatas.data[this.state.activeStep];
        el.data = val;
        surveyDatas.data = surveyDatas.data.map(
            entry => el.id === entry.id
            ? {...entry, ...el}
            : entry
        );
    }

    render() {
        const { classes } = this.props;
        const activeStep  = this.state.activeStep;
        const barColorStyle = jss.createStyleSheet({
          bar: {
            'background-color': '#5BB85D'
          }
        }).attach();
        
        return (
            <LayoutWrapper>
                <FormsMainWrapper>
                    <FormsComponentWrapper className=" mateFormsComponent ">
                        <FullColumn>
                            <Papersheet>
                                <div className={classes.root}>
                                    {this.showPage(surveyDatas.data[activeStep],activeStep)}
                                    <div style={{marginTop: '16px', display: 'flex', flexDirection: 'row', position: 'relative', width: '100%'}}>
                                        <LinearProgress
                                            classes={{barColorPrimary: barColorStyle.classes.bar}}
                                            className={classes.progress}
                                            color="primary" variant="determinate" value={activeStep * 100/ (surveyDatas.data.length-1)} />

                                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                            <Button color="default" className={classes.button} onClick={this.handleBack} disabled={activeStep === 0} >Back</Button>
                                            <Button color="primary" variant="contained" 
                                                className={classes.button} 
                                                onClick={this.handleNext} 
                                                disabled={activeStep >= surveyDatas.data.length }  >  {activeStep === surveyDatas.data.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Papersheet>
                        </FullColumn>
                    </FormsComponentWrapper>
                </FormsMainWrapper>
            </LayoutWrapper>
        );
    };
}
  
MyMainForm.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(MyMainForm);