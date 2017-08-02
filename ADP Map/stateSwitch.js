function stateSwitch(staData)
{
 switch (staData) {
     case 'AL':
     //State @ a Glance
     staNUM = '1';
     Abbr = 'AL';
     sitID = 'R000999999';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '9999999999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';
     
     //LUMIN: State
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://revenue.alabama.gov/';
     suiWEB = 'http://labor.alabama.gov/';
     localWEB = 'http://www.amroa.com/roster.htm';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'A-1';
     suiFORM = 'UC-CR4';
     
     //Addl. Wage and Tax
     minWAGE = '7.25';
     minCASH = '2.13';
     maxTIP = '5.12';
     subminWAGE = '4.25';
     supplBONUS = '5.0' +'%';
     suiLIMIT = '8000';
     sdiLIMIT = 'N/A';
     eeDED = 'None';
     newERSUI = '2.7' +'%';
     disability = 'None';
     
     //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';
     
     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disburment Metohd: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disburment Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'AK':
     //State @ a Glance
     staNUM = '02';
     Abbr = 'AK';
     sitID = 'N/A';
     sitFREQ = 'N/A';
     sitDISB = 'N/A';
     suiID = '99999999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';
     
     //LUMIN: States
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'N/A';
     suiWEB = 'http://www.labor.state.ak.us/';
     localWEB = 'N/A';
     spTAX = 'Employee-paid unemployment (SUI), Geographic and Occupational description';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'N/A';
     suiFORM = 'TQ0IC';
     
     //Addl. Wage and Tax
     minWAGE = '9.75';
     minCASH = '9.75';
     maxTIP = 'Not Allowed';
     supplBONUS = 'No Provision';
     suiLIMIT = ' $39,700.00';
     newERSUI = '1.69-2.10%';
     disability = 'None';
     sdiLIMIT = ' N/A';
     eeDED = 'None';
     
     //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';
     
     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'AZ':
     //State @ a Glance 
     staNUM = '03';
     Abbr = 'AZ';
     sitID = '99-9999999';
     sitFREQ = 'T2 - Tied to Federal';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '9999999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.azdor.gov/';
     suiWEB = 'https://www.azdes.gov/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'A1-QRT';
     suiFORM = 'UC-018';

     //Addl. Wage and Tax 
     minWAGE = '8.05';
     minCASH = '5.05';
     maxTIP = '3';
     supplBONUS = '2.00%';
     suiLIMIT = ' $7,000.00';
     newERSUI = '2.00%';
     disability = 'None';
     sdiLIMIT = ' N/A';
     eeDED = 'None';

     //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';
     
     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
     case 'AR':
     //State @ a Glance 
     staNUM = '04';
     Abbr = 'AR';
     sitID = '99999999WHW';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '999999999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'C - Check';
     
     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.dfa.arkansas.gov/';
     suiWEB = 'http://dws.arkansas.gov/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'AR-3MAR';
     suiFORM = 'DWS-ARK209B'; 
     
     //Addl. Wage and Tax 
     minWAGE = '8';
     minCASH = '2.63';
     maxTIP = '5.37';
     supplBONUS = '6.90%';
     suiLIMIT = ' $12,000.00';
     newERSUI = '3.30%';
     disability = 'None';
     sdiLIMIT = ' N/A';
     eeDED = 'None';
     
     //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';
     
     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
     case 'CA':
     //State @ a Glance 
     staNUM = '05';
     Abbr = 'CA';
     sitID = '999-9999 9';
     sitFREQ = 'T1 - Tied to Federal';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '999-9999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'G - Group Check'; 
     
     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.edd.ca.gov/';
     suiWEB = 'http://www.edd.ca.gov/';
     localWEB = '';
     spTAX = 'EE-paid disability (SDI) Temporary-services employers';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'DE9/DE9-c';
     suiFORM = 'DE9/DE9-c'; 
     
     //Addl. Wage and Tax 
     minWAGE = '10.50';
     minCASH = '10.50';
     maxTIP = 'Not Allowed';
     supplBONUS = '6.6%, 10.23% for Bonus';
     suiLIMIT = ' $7,000.00';
     newERSUI = '3.50%';
     disability = 'Yes';
     sdiLIMIT = ' $106,742.00';
     eeDED = '0.90%';
	 workCOMP = 'N/A';
	 appl4Proc = 'ADP cannot register on behalf of an employer. An employer is required by law to file a registration form with the Employment Development Department (EDD) within fifteen (15) days after paying over $100 in wages for employment in a calendar quarter.';

     
     //Applied For ID Matrix - MISSING
     sitAPPL = 'No';
     sitAPPLNOTES = 'Effective as of 10/1/16';
     suiAPPL = 'No';
     suiAPPLNOTES = 'Effective as of 10/1/16';
     
    //Combined Variables
    
    //right panel, left side
	left1 = staData + ' ' + 'State Income Tax Info';
	left2 = '<b>State Number:</b> ' + staNUM +'<br />' +
			'<b>SIT ID Format:</b> ' + sitID +'<br />' +
			'<b>SIT Frequency:</b> ' + sitFREQ +'<br />' +
			'<b>SIT Disbursement Method:</b> ' + sitDISB +'<br />' + 
            '<b>SIT Form:</b> ' + sitFORM +'<br />' +
            '<b>SIT Applied For?</b> ' + sitAPPL +'<br />' +
            '<b>Applied For Notes:</b> ' + sitAPPLNOTES +'<br />' +
			'<b>SIT Website:</b> ' + sitWEB +'<br />';
	
    //right panel, right side	
	right1 = staData + ' ' + 'State Unemployment Tax Info';
	right2 = '<b>SUI ID Format:</b> ' + suiID +'<br />' +
			 '<b>SUI Frequency:</b> ' + suiFREQ +'<br />' +
			 '<b>SUI Disbursement Method:</b> ' + suiDISB +'<br />' +
             '<b>SUI Limit:</b> ' + suiLIMIT +'<br />' +
             '<b>New SUI ER Rate:</b> ' + newERSUI +'<br />' +
             '<b>SUI Form:</b> ' + suiFORM +'<br />' +
             '<b>SUI Applied for?</b> ' + suiAPPL +'<br />' +
             '<b>Applied For Notes:</b> ' + suiAPPLNOTES +'<br />' +
			 '<b>SUI Website:</b> ' + suiWEB +'<br />';
			 
	applBox = '<br />' + '<b>Applied For Process:</b> ' + appl4Proc + '<br />';

    //bottom panel, 1st column
    bottomCol1 = '<b>Minimum Wage:</b> ' + '$' + minWAGE +'<br />' +
                 '<b>Minimum Tip Wage:</b> ' + '$' + minCASH +'<br />' +
                 '<b>Maximum Tip Credit:</b> ' + maxTIP +'<br />' +
                 '<b>Supplemental Bonus:</b> ' + supplBONUS +'<br />';

    bottomCol2 = '<b>Local Tax:</b> ' + localTAX +'<br />' +
                 '<b>Disability:</b> ' + disability +'<br />' +
                 '<b>SDI Limit:</b> ' + sdiLIMIT +'<br />' +
                 '<b>EE Deduction:</b> ' + eeDED +'<br />' +
                 '<b>Workers Compensation:</b> ' + workCOMP + '<br />' +
                 '<b>POA Required:</b> ' + poaREQ +'<br />' +
                 '<b>TPA Required:</b> ' + tpaREQ +'<br />'; 

    bottomCol3 = '<b>Special Tax:</b> ' + spTAX +'<br />';

    //bottomCol4 = 
                 

    break;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
     case 'CO': 
     //State @ a Glance 
     staNUM = '06';
     Abbr = 'CO';
     sitID = '99999999';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'C - Check';
     suiID = '999999.99';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'C - Check';
     
     //LUMIN: States 
     poaREQ = 'CO SUI';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.colorado.gov/';
     suiWEB = 'http://www.colorado.gov/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'Yes';
     standHR = 'No';
     sitFORM = 'DR 1094W';
     suiFORM = 'UITR-1';
     
     //Addl. Wage and Tax 
     minWAGE = '8.31';
     minCASH = '5.29';
     maxTIP = '3.02';
     supplBONUS = '0.0463';
     suiLIMIT = '12200';
     newERSUI = '0.0212';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';
     
     //Applied For ID Matrix 
     sitAPPL = 'Yes';
     sitAPPLNOTES = '';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';
     
     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
     case 'CT':
     //State @ a Glance 
     staNUM = '07';
     Abbr = 'CT';
     sitID = '9999999-99999999999-999';
     sitFREQ = 'WK - Weekly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '99-999-99';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer'; 
     
     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.ct.gov/drs/';
     suiWEB = 'http://www.ctdol.state.ct.us/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'CT-WH';
     suiFORM = 'UC-2 & UC-5A'; 

     //Addl. Wage and Tax 
     minWAGE = '9.6';
     minCASH = 'Tipped Hotel 6.07, Tipped bartenders 7.82, all other 9.25';
     maxTIP = '$9.25 - Cash Wage';
     supplBONUS = 'No Provision';
     suiLIMIT = ' $15,000.00';
     newERSUI = '4.30%';
     disability = 'None';
     sdiLIMIT = ' N/A';
     eeDED = 'None';
     
     //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';
     
     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'DE': // -> START HERE for adding missing bottoms
     //State @ a Glance 
     staNUM = '08';
     Abbr = 'DE';
     sitID = '1-999999999-001';
     sitFREQ = 'OM - Octal';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '99999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'C - Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://revenue.delaware.gov/';
     suiWEB = 'http://ui.delawareworks.com/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'W-1';
     suiFORM = 'UC-8';

     //Addl. Wage and Tax 
     minWAGE = '8.25';
     minCASH = '2.23';
     maxTIP = '6.02';
     supplBONUS = 'No Provision';
     suiLIMIT = ' $18,500.00';
     newERSUI = '1.90%';
     disability = 'None';
     sdiLIMIT = ' N/A';
     eeDED = 'None';

     //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'DC':
     //State @ a Glance 
     staNUM = '09';
     Abbr = 'DC';
     sitID = '1E+12';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '99-9999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'S - Super Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'DC SUI';
     sitWEB = 'http://dc.gov/';
     suiWEB = 'http://dc.gov/';
     localWEB = '';
     spTAX = 'Corporate Officer / EE Relationship New Commuter Transit Benefit';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'N/A';
     suiFORM = 'DOES-UC830 / DUC8-31 ADP sends ILO';

     //Addl. Wage and Tax 
     minWAGE = '11.5';
     minCASH = '2.77';
     maxTIP = '8.73';
     supplBONUS = 'No Provision';
     suiLIMIT = ' $9,000.00';
     newERSUI = '2.70%';
     disability = 'None';
     sdiLIMIT = ' N/A';
     eeDED = 'None';

     //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'FL':
     //State @ a Glance 
     staNUM = '10';
     Abbr = 'FL';
     sitID = 'N/A';
     sitFREQ = 'N/A';
     sitDISB = 'N/A';
     suiID = '9999999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'FL SUI';
     sitWEB = 'N/A';
     suiWEB = 'http://dor.myflorida.com/dor/';
     localWEB = '';
     spTAX = 'Annual Special Assessment';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'N/A';
     suiFORM = 'RT-6';

     //Addl. Wage and Tax 
     minWAGE = '8.05';
     minCASH = '5.03';
     maxTIP = '3.02';
     supplBONUS = 'No Provision';
     suiLIMIT = ' $7,000.00';
     newERSUI = '2.70%';
     disability = 'None';
     sdiLIMIT = ' N/A';
     eeDED = 'None';

     //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'GA':
     //State @ a Glance 
     staNUM = '11';
     Abbr = 'GA';
     sitID = '9999999-AA';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '999999-99';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'C - Check';
     
     //LUMIN: States 
     poaREQ = 'GA SUI';
     tpaREQ = 'N/A';
     sitWEB = 'http://dor.georgia.gov/';
     suiWEB = 'http://dol.georgia.gov/employers';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'G-7';
     suiFORM = 'DOL-4';
     
     //Addl. Wage and Tax 
     minWAGE = '5.15';
     minCASH = 'N/A';
     maxTIP = 'N/A';
     supplBONUS = 'No Provision';
     suiLIMIT = ' $9,500.00';
     newERSUI = '2.70%';
     disability = 'None';
     sdiLIMIT = ' N/A';
     eeDED = 'None';

     //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'HI':
     //State @ a Glance 
     staNUM = '12';
     Abbr = 'HI';
     sitID = 'W99999999-99';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'C - Check';
     suiID = '999999999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'S - Super Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://tax.hawaii.gov/';
     suiWEB = 'http://tax.hawaii.gov/';
     localWEB = '';
     spTAX = 'Employee-paid disability (SDI)';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'HW-14';
     suiFORM = 'UC-B6';

     //Addl. Wage and Tax 
     minWAGE = '8.5';
     minCASH = '7.75';
     maxTIP = '0.75';
     supplBONUS = 'No Provision';
     suiLIMIT = ' $42,200.00';
     newERSUI = '2.40%';
     disability = 'Yes';
     sdiLIMIT = ' $4.91/week';
     eeDED = '0.5% of wages, up to a maximum deduction of $4.91/wk';

     //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'ID':
     //State @ a Glance 
     staNUM = '13';
     Abbr = 'ID';
     sitID = '999999999';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'V - Variable';
     suiID = '999999999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'V - Variable';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://tax.idaho.gov/';
     suiWEB = 'http://tax.idaho.gov/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = '910';
     suiFORM = 'TAX020';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '3.35';
     maxTIP = '3.9';
     supplBONUS = '7.40%';
     suiLIMIT = ' $37,200.00';
     newERSUI = '1.49%';
     disability = 'None';
     sdiLIMIT = ' N/A';
     eeDED = 'None';

     //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'IL':
     //State @ a Glance 
     staNUM = '13';
     Abbr = 'ID';
     sitID = '999999999';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'V - Variable';
     suiID = '999999999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'V - Variable';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://tax.idaho.gov/';
     suiWEB = 'http://tax.idaho.gov/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = '910';
     suiFORM = 'TAX020';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '3.35';
     maxTIP = '3.9';
     supplBONUS = '7.40%';
     suiLIMIT = ' $37,200.00';
     newERSUI = '1.49%';
     disability = 'None';
     sdiLIMIT = ' N/A';
     eeDED = 'None';

     //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'IL':
     //State @ a Glance 
     staNUM = '14';
     Abbr = 'IL';
     sitID = '99-9999999ss000 9';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '9999999 9';
     suiFREQ = 'MN - Monthly';
     suiDISB = 'C - Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.revenue.state.il.us/';
     suiWEB = 'http://www.ides.illinois.gov/';
     localWEB = '';
     spTAX = 'Monthly filing requirement for SUI';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'IL - 501';
     suiFORM = 'UI-3/40';

     //Addl. Wage and Tax 
     minWAGE = '8.25';
     minCASH = '4.95';
     maxTIP = '3.3';
     supplBONUS = '3.75%';
     suiLIMIT = ' $12,960.00';
     newERSUI = '3.55%';
     disability = 'None';
     sdiLIMIT = ' N/A';
     eeDED = 'None'; 

     //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'IN':
     //State @ a Glance 
     staNUM = '15';
     Abbr = 'IN';
     sitID = '0999999999 999';
     sitFREQ = 'AM - Accelerated Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '999999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'S - Super Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'IN SUI';
     sitWEB = 'http://www.in.gov/dor';
     suiWEB = 'http://www.in.gov/dol';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'Yes';
     standHR = 'N/A';
     sitFORM = 'WH-1 (AM Freq.) or WH-3 (AN Freq.)';
     suiFORM = 'UC-1/UC-5';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '2.13';
     maxTIP = '5.12';
     supplBONUS = '3.30%';
     suiLIMIT = ' $9,500.00';
     newERSUI = 'Industry Average';
     disability = 'None';
     sdiLIMIT = ' N/A';
     eeDED = 'None';

     //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'IA':
     //State @ a Glance 
     staNUM = '16';
     Abbr = 'IA';
     sitID = '99-9999999001';
     sitFREQ = 'SM - Semi-Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '00999999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'C - Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'IA SUI';
     sitWEB = 'http://www.iowa.gov/tax/';
     suiWEB = 'http://www.iowaworks.org/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'e-File';
     suiFORM = '65-5300';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '4.35';
     maxTIP = '2.9';
     supplBONUS = '6.00%';
     suiLIMIT = ' $28,300.00';
     newERSUI = '1.00%';
     disability = 'None';
     sdiLIMIT = ' N/A';
     eeDED = 'None';

     //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    case 'KS':
    //State @ a Glance              
    staNUM = "17";
    Abbr = "KS";
    sitID = "036999999999F01";
    sitFREQ = "SM - Semi-Monthly";
    sitDISB = "E EFT-Electronic Funds Transfer";
    suiID = "999999";
    suiFREQ = "QT - Quarterly";
    suiDISB = "E - Electronic Funds Transfer";
                    
    //LUMIN: States             
    poaREQ = "N/A";
    tpaREQ = "N/A";
    sitWEB = "http://www.ksrevenue.org/";
    suiWEB = "http://www.kansasemployer.gov/";
    localWEB = " ";
    spTAX = "N/A";
    localTAX = "Yes";
    standHR = "No";
    sitFORM = "KW-3";
    suiFORM = "K-CNS100";
                    
    //Addl. Wage and Tax                
    minWAGE = "7.25";
    minCASH = "2.13";
    maxTIP = "5.12";
    supplBONUS = "4.50%";
    suiLIMIT = "$14,000.00";
    newERSUI = "2.70%";
    disability = "None";
    sdiLIMIT = "N/A";
    eeDED = "None";

    //Applied For ID Matrix
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration'; 

    //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

     case 'KY':
     //State @ a Glance 
     staNUM = '18';
     Abbr = 'KY';
     sitID = '999999';
     sitFREQ = 'SM - Semi-Monthly';
     sitDISB = 'C - Check';
     suiID = '99-999999 9 99-999999 A9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'S - Super Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.revenue.ky.gov/';
     suiWEB = 'http://www.labor.ky.gov/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'Yes';
     standHR = 'No';
     sitFORM = 'K-1 (check filers), K-1E (EFT filers), K-3 (check filers - last deposit of 4Q is filed on this form), K-3E (EFT filers - last deposit of 4Q is filed on this form)';
     suiFORM = 'UI-3 Quarterly';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '2.13';
     maxTIP = '5.12';
     supplBONUS = 'No Provision';
     suiLIMIT = '10200';
     newERSUI = '0.027';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Yes';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'LA':
     //State @ a Glance 
     staNUM = '19';
     Abbr = 'LA';
     sitID = '9999999999';
     sitFREQ = 'SM - Semi-Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '999999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'D - EDI';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.rev.state.la.us/';
     suiWEB = 'http://www.ldol.state.la.us/';
     localWEB = '';
     spTAX = 'Occupational description';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'L-1';
     suiFORM = '4BC';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '2.13';
     maxTIP = '5.12';
     supplBONUS = 'No Provision';
     suiLIMIT = '7700';
     newERSUI = '1.22-3.04%';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Critical';
     sitAPPLNOTES = '';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
     case 'ME':
     //State @ a Glance 
     staNUM = '20';
     Abbr = 'ME';
     sitID = '99-9999999 99';
     sitFREQ = 'SW - Semi-Weekly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '999999999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.state.me.us/revenue/';
     suiWEB = 'http://www.state.me.us/labor/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'SW- 900ME QT (Withholding only) 941ME';
     suiFORM = 'UC-1';

     //Addl. Wage and Tax 
     minWAGE = '7.5';
     minCASH = '3.75';
     maxTIP = '3.75';
     supplBONUS = '0.05';
     suiLIMIT = '12000';
     newERSUI = '0.021';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'FEIN';
     sitAPPLNOTES = '';
     suiAPPL = 'Warning';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
     case 'MD':
     //State @ a Glance 
     staNUM = '21';
     Abbr = 'MD';
     sitID = '0999999 9 1999999 9';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '009999999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'S - Super Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.comp.state.md.us/';
     suiWEB = 'http://www.dllr.state.md.us/';
     localWEB = '';
     spTAX = 'NAICS code on annual return (MW508)';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'MW506 - frequency varies, MW508 - annual';
     suiFORM = 'DLLR/OUI 15';

     //Addl. Wage and Tax 
     minWAGE = '8.75';
     minCASH = '3.63';
     maxTIP = '5.12';
     supplBONUS = '5.75% Plus County W/H Rate';
     suiLIMIT = '8500';
     newERSUI = '0.026';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Critical';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
     case 'MA':
     //State @ a Glance 
     staNUM = '22';
     Abbr = 'MA';
     sitID = '999-999-999 99';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '99-99999-9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'MA SUI';
     sitWEB = 'http://www.mass.gov/dor/';
     suiWEB = 'http://www.mass.gov/lwd/';
     localWEB = '';
     spTAX = 'Employer Medical Assistance Contribution (EMAC) for employers with 6 or more EEs in a quarter (a.k.a. MA health tax or UHI)Note: EMAC uses the MA SUI ID number';
     localTAX = 'N/A';
     standHR = 'Yes';
     sitFORM = 'M942 or M941 (Webfile)';
     suiFORM = 'DET Quarterly Contribution Report (Quest)';

     //Addl. Wage and Tax 
     minWAGE = '10';
     minCASH = '3.35';
     maxTIP = '6.65';
     supplBONUS = '0.051';
     suiLIMIT = '15000';
     newERSUI = '1.87% (Plus 0.81% solvency assessment and 0.056% workforce training fund surcharge)';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'FEIN';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = 'TPA is Client Responsibility';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
     case 'MI':
     //State @ a Glance 
     staNUM = '23';
     Abbr = 'MI';
     sitID = '99-9999999ME-9999999TR-9999999';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'C - Check';
     suiID = '9999999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'MI SIT';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.michigan.gov/treasury';
     suiWEB = 'http://www.michigan.gov/uia/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'Yes';
     standHR = 'No';
     sitFORM = '160; 165 (Annual Recon)';
     suiFORM = 'UIA-1020';

     //Addl. Wage and Tax 
     minWAGE = '8.5';
     minCASH = '3.23';
     maxTIP = '5.27';
     supplBONUS = '0.0425';
     suiLIMIT = '9000 (Standard Wage Base), 9500 (Delinquent Employers)';
     newERSUI = '2.7% (Plus 1/3 of Chargeable Benefits)';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'FEIN';
     sitAPPLNOTES = '';
     suiAPPL = 'Critical';
     suiAPPLNOTES = 'Force Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
     case 'MN':
     //State @ a Glance 
     staNUM = '24';
     Abbr = 'MN';
     sitID = '9999999';
     sitFREQ = 'FF - Full-base eFiling';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '09999999-0999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'MN SIT-SUI';
     sitWEB = 'http://www.revenue.state.mn.us/';
     suiWEB = 'http://www.uimn.org/employers/employer-account/index.jsp';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'Yes';
     sitFORM = 'XML';
     suiFORM = 'MMREF/eFile';

     //Addl. Wage and Tax 
     minWAGE = '9.5';
     minCASH = '9.5';
     maxTIP = 'None';
     supplBONUS = '0.0625';
     suiLIMIT = '31000';
     newERSUI = '0.0159';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
     case 'MS':
     //State @ a Glance 
     staNUM = '25';
     Abbr = 'MS';
     sitID = '9999-9999';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '99-99999-Z-99';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'C - Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.dor.ms.gov/';
     suiWEB = 'http://mdes.ms.gov/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = '89-140';
     suiFORM = 'UI-2';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '2.13';
     maxTIP = '5.12';
     supplBONUS = 'No Provision';
     suiLIMIT = '14000';
     newERSUI = '(New employers pay 1.24% in 1st year, 1.34% in 2nd year and 1.44% in 3rd year; includes 0.24% workforce investment and training contribution rate)';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Critical';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'MO':
     //State @ a Glance 
     staNUM = '26';
     Abbr = 'MO';
     sitID = '99999999';
     sitFREQ = 'QM - Quarter-Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '999999-9-999-9999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://dor.mo.gov/';
     suiWEB = 'http://labor.mo.gov/';
     localWEB = '';
     spTAX = 'Missouri Income Tax Rebate -http://lumin.es.ad.adp.com:8080/contactcenter/documentLink.do?externalID =77705&msid =MS_SBS_1_1';
     localTAX = 'Yes';
     standHR = 'No';
     sitFORM = 'MO-941P';
     suiFORM = 'MODES-4';

     //Addl. Wage and Tax 
     minWAGE = '7.65';
     minCASH = '3.825';
     maxTIP = '3.825';
     supplBONUS = '0.06';
     suiLIMIT = '13000';
     newERSUI = '0.0351';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Yes';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'MT':
     //State @ a Glance 
     staNUM = '27';
     Abbr = 'MT';
     sitID = '9999999-999-WTH';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'C - Check';
     suiID = '999999 999 9999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'S - Super Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'https://revenue.mt.gov/';
     suiWEB = 'http://uid.dli.mt.gov/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'Form MW-1';
     suiFORM = 'Form UI-5';

     //Addl. Wage and Tax 
     minWAGE = '8.05(Annual Sales Exceed $110,000)';
     minCASH = '8.05';
     maxTIP = 'None';
     supplBONUS = '0.06';
     suiLIMIT = '30500';
     newERSUI = 'Industry Average';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Yes';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'NE':
     //State @ a Glance 
     staNUM = '28';
     Abbr = 'NE';
     sitID = '999999999999999999999999999999';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '999999999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.revenue.state.ne.us/';
     suiWEB = 'http://dol.nebraska.gov/';
     localWEB = '';
     spTAX = '';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = '941 N';
     suiFORM = 'UI 11T';

     //Addl. Wage and Tax 
     minWAGE = '9';
     minCASH = '2.13';
     maxTIP = '6.87';
     supplBONUS = '0.05';
     suiLIMIT = '9000';
     newERSUI = '0.0125';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Yes';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'NV':
     //State @ a Glance 
     staNUM = '29';
     Abbr = 'NV';
     sitID = 'N/A';
     sitFREQ = 'N/A';
     sitDISB = 'N/A';
     suiID = '99999999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'NV SUI';
     sitWEB = 'N/A';
     suiWEB = 'http://tax.state.nv.us/';
     localWEB = '';
     spTAX = 'Modified Business Tax (MBT)';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'N/A';
     suiFORM = 'NUCS-4072';

     //Addl. Wage and Tax 
     minWAGE = '8.25';
     minCASH = '8.25';
     maxTIP = 'None';
     supplBONUS = 'N/A';
     suiLIMIT = '282000';
     newERSUI = '0.03';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'N/A';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = 'TPA is Client Responsibility';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'NH':
     //State @ a Glance 
     staNUM = '30';
     Abbr = 'NH';
     sitID = ' N/A';
     sitFREQ = 'N/A';
     sitDISB = 'N/A';
     suiID = '000999999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = '';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'N/A';
     suiWEB = 'http://www.nhes.nh.gov/index.htm';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'N/A';
     suiFORM = 'DES 200';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '3.27';
     maxTIP = '3.98';
     supplBONUS = 'N/A';
     suiLIMIT = '14000';
     newERSUI = '0.017';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'N/A';
     sitAPPLNOTES = '';
     suiAPPL = 'Warning';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'NJ':
     //State @ a Glance 
     staNUM = '31';
     Abbr = 'NJ';
     sitID = '999-999-999/000';
     sitFREQ = 'WK - Weekly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '999-999-999/000';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.state.nj.us/treasury/taxation/';
     suiWEB = 'http://lwd.dol.state.nj.us/labor/ui/ui_index.html';
     localWEB = '';
     spTAX = 'Employee-paid unemployment (SUI) or disability (SDI) Paid Family Leave (refer to link at right)';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'NJ-927';
     suiFORM = 'NJ-927';

     //Addl. Wage and Tax 
     minWAGE = '8.38';
     minCASH = '2.13';
     maxTIP = '6.25';
     supplBONUS = 'No provision, but for pay over $500,000 withhold at 9.9%';
     suiLIMIT = '32600';
     newERSUI = '0.028';
     disability = 'Yes';
     sdiLIMIT = '32600';
     eeDED = '0.002';

     //Applied For ID Matrix 
     sitAPPL = 'FEIN';
     sitAPPLNOTES = '';
     suiAPPL = 'FEIN';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'NM':
     //State @ a Glance 
     staNUM = '32';
     Abbr = 'NM';
     sitID = '9999999999 9';
     sitFREQ = 'AM - Accelerated Monthly';
     sitDISB = '';
     suiID = '99999999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'NM SUI';
     sitWEB = 'http://www.tax.newmexico.gov/';
     suiWEB = 'http://www.dws.state.nm.us/';
     localWEB = '';
     spTAX = 'Workers’ Compensation Personnel Assessment (WCA)';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'CRS-1';
     suiFORM = 'ES903A';

     //Addl. Wage and Tax 
     minWAGE = '7.5';
     minCASH = '2.13';
     maxTIP = '5.37';
     supplBONUS = '0.049';
     suiLIMIT = '24100';
     newERSUI = '1.0% or Industry Average';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Critical';
     sitAPPLNOTES = '';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'NY':
     //State @ a Glance 
     staNUM = '33';
     Abbr = 'NY';
     sitID = '999999999 9 99999999999 9';
     sitFREQ = 'D3 - 3rd-Day';
     sitDISB = 'S - Super Check';
     suiID = '99-99999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'S - Super Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'NY SIT';
     sitWEB = 'http://www.tax.ny.gov/';
     suiWEB = 'http://www.labor.ny.gov/';
     localWEB = '';
     spTAX = 'Employee-paid disability (SDI), New York City (NYC) Mass Transit Benefit';
     localTAX = 'Yes';
     standHR = 'No';
     sitFORM = 'NYS-45';
     suiFORM = 'NYS-45';

     //Addl. Wage and Tax 
     minWAGE = '9';
     minCASH = '7.5';
     maxTIP = '1.5';
     supplBONUS = '0.0962';
     suiLIMIT = '10700';
     newERSUI = '0.041';
     disability = 'Yes';
     sdiLIMIT = 'N/A';
     eeDED = '0.005';

     //Applied For ID Matrix 
     sitAPPL = 'FEIN';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = 'TPA is Client Responsibility';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'NC':
     //State @ a Glance 
     staNUM = '34';
     Abbr = 'NC';
     sitID = '099999999199999999299999999399999999699999999';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '99-99-999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.dor.state.nc.us/';
     suiWEB = 'http://www.ncesc1.com/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'NC5Q';
     suiFORM = 'NCUI-101';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '2.13';
     maxTIP = '5.12';
     supplBONUS = '5.85';
     suiLIMIT = '22300';
     newERSUI = '0.01';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Yes';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
     case 'ND':
     //State @ a Glance 
     staNUM = '35';
     Abbr = 'ND';
     sitID = '999999999-01';
     sitFREQ = 'QT - Quarterly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '09999991999999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.nd.gov/tax';
     suiWEB = 'http://www.nd.gov/labor';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = '306 (Qtr); 307 (Annual)';
     suiFORM = 'SFN 41263';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '4.86';
     maxTIP = '2.39';
     supplBONUS = '0.0184';
     suiLIMIT = '37200';
     newERSUI = '0.0162';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'FEIN';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'OH':
     //State @ a Glance 
     staNUM = '36';
     Abbr = 'OH';
     sitID = 'xx-999999 9 (xx =51-54)';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '9999999-99 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.tax.ohio.gov/';
     suiWEB = 'http://jfs.ohio.gov/ouc/uctax/index.stm';
     localWEB = '';
     spTAX = 'Regional Income Tax Agency (RITA)';
     localTAX = 'Yes';
     standHR = 'No';
     sitFORM = 'IT-942 - Quarterly';
     suiFORM = 'JFS 20127 - Quarterly';

     //Addl. Wage and Tax 
     minWAGE = '8.1';
     minCASH = '4.05';
     maxTIP = '4.05';
     supplBONUS = '0.035';
     suiLIMIT = '9000';
     newERSUI = '0.027';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Yes';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'OK':
     //State @ a Glance 
     staNUM = '37';
     Abbr = 'OK';
     sitID = 'WTH 99999999-99';
     sitFREQ = 'FF - Full-base eFiling';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = ' 99-999999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'C - Check';

     //LUMIN: States 
     poaREQ = 'OK SUI';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.oktax.state.ok.us/';
     suiWEB = 'http://www.ok.gov/odol';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'OW-9A';
     suiFORM = 'OESC (efile); OES-3 (hardcopy)';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '2.13';
     maxTIP = '5.12';
     supplBONUS = '0.05';
     suiLIMIT = '17500';
     newERSUI = '0.015';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Critical';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'OR':
     //State @ a Glance 
     staNUM = '38';
     Abbr = 'OR';
     sitID = '0999999 91999999 9';
     sitFREQ = 'T2 - Tied to Federal';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '0999999 91999999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.oregon.gov/DOR/';
     suiWEB = 'http://www.oregon.gov/BOLI/Pages/index.aspx';
     localWEB = '';
     spTAX = 'Tri-Met and Lane Transit Taxes Workers Benefit Fund (WBF) Fee';
     localTAX = 'Yes';
     standHR = 'Yes';
     sitFORM = 'OQ';
     suiFORM = 'OQ';

     //Addl. Wage and Tax 
     minWAGE = '9.75';
     minCASH = '9.75 (9.50 for Non-Urban Counties)';
     maxTIP = 'None';
     supplBONUS = '0.09';
     suiLIMIT = '36900';
     newERSUI = '0.026';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Yes';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'PA':
     //State @ a Glance 
     staNUM = '39';
     Abbr = 'PA';
     sitID = '9999 9999';
     sitFREQ = 'SM - Semi-Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '99-99999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'PA SUI';
     sitWEB = 'http://www.revenue.state.pa.us/';
     suiWEB = 'http://www.dli.state.pa.us/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'Yes';
     standHR = 'No';
     sitFORM = 'PA-W3';
     suiFORM = 'UC-2';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '2.83';
     maxTIP = '4.42';
     supplBONUS = '0.0307';
     suiLIMIT = '9500';
     newERSUI = '0.036785';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Yes';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = 'TPA is Client Responsibility';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'RI':
     //State @ a Glance 
     staNUM = '40';
     Abbr = 'RI';
     sitID = '99999999900';
     sitFREQ = 'QM - Quarter-Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '000999999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.tax.ri.gov/';
     suiWEB = 'http://www.uitax.ri.gov/';
     localWEB = '';
     spTAX = 'Employee-paid disability (SDI) Job Development Fund (tax rate of .21% as of 1/1/15)';
     localTAX = 'N/A';
     standHR = 'Yes';
     sitFORM = 'RI/W3';
     suiFORM = 'TX-17';

     //Addl. Wage and Tax 
     minWAGE = '9.6';
     minCASH = '3.39';
     maxTIP = '6.21';
     supplBONUS = '0.0599';
     suiLIMIT = '22000(Tier 1), 23500(Tier II)';
     newERSUI = '2.27% (Plus a 0.21% job development assessment / fund)';
     disability = 'Yes';
     sdiLIMIT = '66300';
     eeDED = '0.012';

     //Applied For ID Matrix 
     sitAPPL = 'Critical';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'SC':
     //State @ a Glance 
     staNUM = '41';
     Abbr = 'SC';
     sitID = '99999999 9 999999999';
     sitFREQ = 'T2 - Tied to Federal';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '999999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'C - Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.sctax.org/default.htm';
     suiWEB = 'http://www.sces.org/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'WH-1605';
     suiFORM = 'UCE-120';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '2.13';
     maxTIP = '5.12';
     supplBONUS = '0.07';
     suiLIMIT = '14000';
     newERSUI = '0.0139';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Yes';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'SD':
     //State @ a Glance 
     staNUM = '42';
     Abbr = 'SD';
     sitID = 'N/A';
     sitFREQ = 'N/A';
     sitDISB = 'N/A';
     suiID = '99999.9 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'C - Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://dor.sd.gov/';
     suiWEB = 'http://dlr.sd.gov/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'N/A';
     suiFORM = '21';

     //Addl. Wage and Tax 
     minWAGE = '8.55';
     minCASH = '4.275';
     maxTIP = '4.275';
     supplBONUS = 'None';
     suiLIMIT = '15000';
     newERSUI = '0.0175';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'N/A';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'TN':
     //State @ a Glance 
     staNUM = '43';
     Abbr = 'TN';
     sitID = 'N/A';
     sitFREQ = 'N/A';
     sitDISB = 'N/A';
     suiID = '0999-999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'TN SUI';
     tpaREQ = 'N/A';
     sitWEB = 'N/A';
     suiWEB = 'https://www.tn.gov/workforce';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'N/A';
     suiFORM = 'LB-0851';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '2.13';
     maxTIP = '5.12';
     supplBONUS = 'None';
     suiLIMIT = '8000';
     newERSUI = '0.027';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'N/A';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = 'Force Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'TX':
     //State @ a Glance 
     staNUM = '44';
     Abbr = 'TX';
     sitID = 'N/A';
     sitFREQ = 'N/A';
     sitDISB = 'N/A';
     suiID = '99-999999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'TX SUI';
     tpaREQ = 'N/A';
     sitWEB = 'N/A';
     suiWEB = 'http://www.twc.state.tx.us/';
     localWEB = '';
     spTAX = 'County Code required for TOPS setup';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'N/A';
     suiFORM = 'C-3';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '2.13';
     maxTIP = '5.12';
     supplBONUS = 'None';
     suiLIMIT = '9000';
     newERSUI = '0.027';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'N/A';
     sitAPPLNOTES = '';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'UT':
     //State @ a Glance 
     staNUM = '45';
     Abbr = 'UT';
     sitID = '99999999999WTH';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'C - Check';
     suiID = '9-999999-9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'S - Super Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://tax.utah.gov/';
     suiWEB = 'https://jobs.utah.gov/ui/employer/employerhome.aspx';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'TC-941';
     suiFORM = '33H';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '2.13';
     maxTIP = '5.12';
     supplBONUS = 'No Provision';
     suiLIMIT = '322000';
     newERSUI = 'Industry Average';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Critical';
     sitAPPLNOTES = '24-hrs Online Registration';
     suiAPPL = 'Yes';
     suiAPPLNOTES = 'Force Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'VT':
     //State @ a Glance 
     staNUM = '46';
     Abbr = 'VT';
     sitID = '430999999999F01 WHT99999999';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '999 9999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'G - Group Check';

     //LUMIN: States 
     poaREQ = 'VT SIT';
     tpaREQ = 'VT SIT';
     sitWEB = 'http://tax.vermont.gov/';
     suiWEB = 'http://labor.vermont.gov/';
     localWEB = '';
     spTAX = 'Employers Health Care Fund Contribution';
     localTAX = 'N/A';
     standHR = 'Yes';
     sitFORM = 'WH 431 - MN and QT Frequency';
     suiFORM = 'C-101 and C147';

     //Addl. Wage and Tax 
     minWAGE = '9.6';
     minCASH = '4.8';
     maxTIP = '4.8';
     supplBONUS = '24% of Federal Tax';
     suiLIMIT = '16800';
     newERSUI = '0.01';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Critical';
     sitAPPLNOTES = 'TPA is Client Responsibility';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'VA':
     //State @ a Glance 
     staNUM = '47';
     Abbr = 'VA';
     sitID = 'T1 = 30-999999999F-999MN = 30-V99999999F-999';
     sitFREQ = 'SW - Semi-Weekly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '99999999';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'S - Super Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://www.tax.virginia.gov/';
     suiWEB = 'http://www.vec.virginia.gov/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'VA-5 (semi monthly, monthly, and quarterly filers) VA-16 (semi-weekly filers)';
     suiFORM = 'VEC-FC-20';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = 'No Minimum';
     maxTIP = 'No Maximum';
     supplBONUS = '0.0575';
     suiLIMIT = '8000';
     newERSUI = '0.0257';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Critical';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'WA':
     //State @ a Glance 
     staNUM = '48';
     Abbr = 'WA';
     sitID = ' N/A';
     sitFREQ = 'N/A';
     sitDISB = '';
     suiID = '999999 99 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'C - Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'N/A';
     suiWEB = 'http://www.esd.wa.gov/';
     localWEB = '';
     spTAX = 'Labor and Industry (L&I)';
     localTAX = 'N/A';
     standHR = 'Yes';
     sitFORM = 'N/A';
     suiFORM = 'EMA 5208A';

     //Addl. Wage and Tax 
     minWAGE = '9.47';
     minCASH = '9.47';
     maxTIP = 'None';
     supplBONUS = 'N/A';
     suiLIMIT = '44000';
     newERSUI = 'Industry Average';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'N/A';
     sitAPPLNOTES = '';
     suiAPPL = 'Critical';
     suiAPPLNOTES = 'Force Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'WV':
     //State @ a Glance 
     staNUM = '49';
     Abbr = 'WV';
     sitID = '9999-9999 99-999-9999';
     sitFREQ = 'MN - Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = ' 000099999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'C - Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'http://tax.wv.gov/Pages/default.aspx';
     suiWEB = 'http://www.wvcommerce.org/App_Media/assets/html/workforce.html';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'EFT no form';
     suiFORM = 'WVUC-A-154';

     //Addl. Wage and Tax 
     minWAGE = '8.75';
     minCASH = '2.62';
     maxTIP = '6.13';
     supplBONUS = '3-6.5%';
     suiLIMIT = '12000';
     newERSUI = '0.027';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'FEIN';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = '24-hrs Online Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'WI':
     //State @ a Glance 
     staNUM = '50';
     Abbr = 'WI';
     sitID = ' 036 9999999999 99';
     sitFREQ = 'SM - Semi-Monthly';
     sitDISB = 'E EFT-Electronic Funds Transfer';
     suiID = '999999-000999999-000-9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'E - Electronic Funds Transfer';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'https://www.revenue.wi.gov/';
     suiWEB = 'https://dwd.wisconsin.gov/';
     localWEB = '';
     spTAX = 'N/A';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'WT-6 (SM/MN/QT) WT-7 (AN)';
     suiFORM = 'UCT-101';

     //Addl. Wage and Tax 
     minWAGE = '7.25';
     minCASH = '2.33';
     maxTIP = '4.92';
     supplBONUS = '4.0%, 5.84%, 6.27% or 7.65%';
     suiLIMIT = '14000';
     newERSUI = 'Industry Average';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'Yes';
     sitAPPLNOTES = '';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '24-hrs Online Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'WY':
     //State @ a Glance 
     staNUM = '51';
     Abbr = 'WY';
     sitID = 'N/A';
     sitFREQ = 'N/A';
     sitDISB = 'N/A';
     suiID = '9999999999999999999999999 9';
     suiFREQ = 'QT - Quarterly';
     suiDISB = 'C - Check';

     //LUMIN: States 
     poaREQ = 'N/A';
     tpaREQ = 'N/A';
     sitWEB = 'N/A';
     suiWEB = 'http://www.wyomingworkforce.org/';
     localWEB = '';
     spTAX = 'Workers’ Compensation (WC)';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = 'N/A';
     suiFORM = 'WYO 056';

     //Addl. Wage and Tax 
     minWAGE = '5.15';
     minCASH = '2.13';
     maxTIP = '3.02';
     supplBONUS = 'None';
     suiLIMIT = '25500';
     newERSUI = 'Inudstry Average';
     disability = 'None';
     sdiLIMIT = 'N/A';
     eeDED = 'None';

     //Applied For ID Matrix 
     sitAPPL = 'N/A';
     sitAPPLNOTES = '';
     suiAPPL = 'Yes';
     suiAPPLNOTES = 'Force Registration';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     case 'PR':
     //State @ a Glance 
     staNUM = '52';
     Abbr = 'PR';
     sitID = '';
     sitFREQ = '';
     sitDISB = '';
     suiID = '';
     suiFREQ = '';
     suiDISB = '';

     //LUMIN: States 
     poaREQ = '';
     tpaREQ = '';
     sitWEB = 'http://www.hacienda.gobierno.pr/';
     suiWEB = 'http://www.hacienda.gobierno.pr/';
     localWEB = '';
     spTAX = 'Pays no federal income tax.';
     localTAX = 'N/A';
     standHR = 'No';
     sitFORM = '499R-1B';
     suiFORM = 'PR Quarterly Wage Report';

     //Addl. Wage and Tax 
     minWAGE = '5.08';
     minCASH = '5.08';
     maxTIP = 'None';
     supplBONUS = 'No Provision';
     suiLIMIT = '7000';
     newERSUI = '0.043';
     disability = 'Yes';
     sdiLIMIT = '9000';
     eeDED = '0.003';

     //Applied For ID Matrix 
     sitAPPL = 'FEIN';
     sitAPPLNOTES = '';
     suiAPPL = 'Critical';
     suiAPPLNOTES = '';

     //Combined Variables
     staTax = 'State Number: ' + staNUM +'<br />' +
    'SIT ID Format: ' + sitID +'<br />' +
    'SIT Frequency: ' + sitFREQ +'<br />' +
    'SIT Disbursement Method: ' + sitDISB +'<br />' +
    'SUI ID Format: ' + suiID +'<br />' +
    'SUI Frequency: ' + suiFREQ +'<br />' +
    'SUI Disbursement Method: ' + suiDISB;

     csInfo = 'This will display additional information about' + ' ' + staData;
     break;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     default:
    csInfo = 'This will display additional information about' + ' ' + staData;
    break;
    // etc
    }
}
