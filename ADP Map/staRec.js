function staRec(staData, staSel) {
	/* d3.csv("https://cdn.rawgit.com/robertborder/maptastrophy/master/data/stateReciprocity.csv", function(data) {
	 console.log(data[0]);
	 )} */
	if (staData == 'AL') {
		switch (staSel) {
			case 'AZ':
			case 'AR':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'AK') {
		switch (staSel) {
			case 'AL':
			case 'AZ':
			case 'AR':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'AZ') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'AR') {
		switch (staSel) {
			case 'AL':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'CA') {
		switch (staSel) {
			case 'AZ':
			case 'AL':
			case 'AR':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'S = Shared, Tax Working State 100%, Tax excess, if any, to Lived-in State';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'CO') {
		switch (staSel) {
			case 'AL':
			case 'AZ':
			case 'AR':
			case 'CA':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'CT') {
		switch (staSel) {
			case 'AZ':
			case 'AL':
			case 'AR':
			case 'CO':
			case 'CA':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'S = Shared, Tax Working State 100%, Tax excess, if any, to Lived-in State';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'DC') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DE':
			case 'FL':
			case 'MD':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'VT':
			case 'VA':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			case 'AZ':
				recip = 'S = Shared, Tax Working State 100%, Tax excess, if any, to Lived-in State';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'DE') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			case 'MD':
			case 'PA':
				recip = 'S = Shared, Tax Working State 100%, Tax excess, if any, to Lived-in State';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'FL') {
		switch (staSel) {
			case 'AL':
			case 'AZ':
			case 'AR':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'GA') {
		switch (staSel) {
			case 'AL':
			case 'AZ':
			case 'AR':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'HI') {
		switch (staSel) {
			case 'AL':
			case 'AZ':
			case 'AR':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'B = Tax Both States @ 100%';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'IA') {
		switch (staSel) {
			case 'AZ':
			case 'AL':
			case 'AR':
			case 'CO':
			case 'CT':
			case 'CA':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IN':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'S = Shared, Tax Working State 100%, Tax excess, if any, to Lived-in State';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'IL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'ID') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MA':
			case 'MD':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'IL') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'IL':
			case 'IN':
			case 'KS':
			case 'LA':
			case 'ME':
			case 'MA':
			case 'MD':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'IA':
			case 'KY':
			case 'MI':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WI':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'IN') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IA':
			case 'KS':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OK':
			case 'RI':
			case 'SC':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'FL':
			case 'KY':
			case 'MI':
			case 'NV':
			case 'NH':
			case 'OH':
			case 'PA':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WI':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			case 'AZ':
			case 'CA':
			case 'DC':
			case 'OR':
				recip = 'S = Shared, Tax Working State 100%, Tax excess, if any, to Lived-in State';
			default:
				recip = '';
		}
	} else if (staData == 'KS') {
		switch (staSel) {
			case 'AZ':
			case 'AL':
			case 'AR':
			case 'CO':
			case 'CT':
			case 'CA':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'S = Shared, Tax Working State 100%, Tax excess, if any, to Lived-in State';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'KY') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'IA':
			case 'ID':
			case 'KS':
			case 'LA':
			case 'ME':
			case 'MA':
			case 'MD':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'IL':
			case 'IN':
			case 'MI':
			case 'NV':
			case 'NH':
			case 'OH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'VA':
			case 'WA':
			case 'WV':
			case 'WI':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'LA') {
		switch (staSel) {
			case 'AL':
			case 'AZ':
			case 'AR':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'MA') {
		switch (staSel) {
			case 'AZ':
			case 'AL':
			case 'AR':
			case 'CO':
			case 'CA':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'S = Shared, Tax Working State 100%, Tax excess, if any, to Lived-in State';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'MD') {
		switch (staSel) {
			case 'AL':
			case 'AZ':
			case 'AR':
			case 'CO':
			case 'CA':
			case 'CT':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'PA':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'VA':
			case 'WA':
			case 'WV':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			case 'DE':
				recip = 'B = Tax Both States @ 100%';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'ME') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'ID':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'MA':
			case 'MD':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'MI') {
		switch (staSel) {
			case 'AL':
			case 'AZ':
			case 'AR':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IA':
			case 'KS':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'IL':
			case 'IN':
			case 'KY':
			case 'MN':
			case 'NV':
			case 'NH':
			case 'OH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WI':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'MN') {
		switch (staSel) {
			case 'AL':
			case 'AZ':
			case 'AR':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
				recip = 'S = Shared, Tax Working State 100%, Tax excess, if any, to Lived-in State';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'MI':
			case 'NV':
			case 'NH':
			case 'ND':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			case 'ID':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'MO') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'MS') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'MT') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'B = Tax Both States @ 100%';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'ND':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'NC') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'ND':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'ND') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MS':
			case 'MO':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'MN':
			case 'MT':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'NE') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'ND':
			case 'NC':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'S = Shared, Tax Working State 100%, Tax excess, if any, to Lived-in State';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'MT':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'NH') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'NJ') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NM':
			case 'NY':
			case 'ND':
			case 'NC':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'S = Shared, Tax Working State 100%, Tax excess, if any, to Lived-in State';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'PA':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'NM') {
		switch (staSel) {
			case 'AL':
			case 'AZ':
			case 'AR':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'B = Tax Both States @ 100%';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'NV') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'NY') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NM':
			case 'NJ':
			case 'ND':
			case 'NC':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'S = Shared, Tax Working State 100%, Tax excess, if any, to Lived-in State';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'OH') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IA':
			case 'KS':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'IN':
			case 'KY':
			case 'MI':
			case 'NV':
			case 'NH':
			case 'PA':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WV':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'OK') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'PA':
			case 'OH':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'OR') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			case 'AZ':
				recip = 'S = Shared, Tax Working State 100%, Tax excess, if any, to Lived-in State';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'PA') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'IN':
			case 'MD':
			case 'NV':
			case 'NH':
			case 'NJ':
			case 'OH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'VA':
			case 'WA':
			case 'WV':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'RI') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'SC') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'SD') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'TN') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'TX') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'UT') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NM':
			case 'NJ':
			case 'NY':
			case 'ND':
			case 'NC':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'S = Shared, Tax Working State 100%, Tax excess, if any, to Lived-in State';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'VA') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'LA':
			case 'ME':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'KY':
			case 'MD':
			case 'NV':
			case 'NH':
			case 'PA':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WV':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			case 'AZ':
				recip = 'S = Shared, Tax Working State 100%, Tax excess, if any, to Lived-in State';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'WA') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'WI') {
		switch (staSel) {
			case 'AL':
			case 'AZ':
			case 'AR':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IA':
			case 'KS':
			case 'LA':
			case 'ME':
			case 'MA':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'PA':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
				recip = 'B = Tax Both States @ 100%';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'IL':
			case 'IN':
			case 'KY':
			case 'MI':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			case 'MD':
			case 'MN':
				recip = 'W = Tax Worked in State Only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'WV') {
		switch (staSel) {
			case 'AL':
			case 'AZ':
			case 'AR':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'LA':
			case 'ME':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'WV':
			case 'WI':
				recip = 'B = Tax Both States @ 100%';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'KY':
			case 'MD':
			case 'NV':
			case 'NH':
			case 'OH':
			case 'PA':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'VA':
			case 'WA':
			case 'WY':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else if (staData == 'WY') {
		switch (staSel) {
			case 'AL':
			case 'AR':
			case 'AZ':
			case 'CA':
			case 'CO':
			case 'CT':
			case 'DE':
			case 'GA':
			case 'HI':
			case 'ID':
			case 'IL':
			case 'IN':
			case 'IA':
			case 'KS':
			case 'KY':
			case 'LA':
			case 'ME':
			case 'MD':
			case 'MA':
			case 'MI':
			case 'MN':
			case 'MS':
			case 'MO':
			case 'MT':
			case 'NE':
			case 'NJ':
			case 'NM':
			case 'NY':
			case 'NC':
			case 'ND':
			case 'PA':
			case 'OH':
			case 'OK':
			case 'OR':
			case 'RI':
			case 'SC':
			case 'UT':
			case 'VT':
			case 'VA':
			case 'WV':
			case 'WI':
				recip = 'W = Tax Worked in State Only';
				break;
			case 'AK':
			case 'DC':
			case 'FL':
			case 'NV':
			case 'NH':
			case 'SD':
			case 'TN':
			case 'TX':
			case 'WA':
				recip = 'L = Tax Lived in State only';
				break;
			default:
				recip = '';
		}
	} else {
		recip = '';
	}
}