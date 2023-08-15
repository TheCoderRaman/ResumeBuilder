import React from 'react';
import TemplateOne from './TemplateOne/TemplateOne';
import TemplateTwo from './TemplateTwo/TemplateTwo';
import TemplateZero from './TemplateZero/TemplateZero';
import TemplateFour from './TemplateFour/TemplateFour';
import TemplateFive from './TemplateFive/TemplateFive';
import TemplateThree from './TemplateThree/TemplateThree';

function Templates(props) {
    return (
        <div style={{ padding: '10px' }}>
            {Object.entries({
                one: <TemplateOne />,
                two: <TemplateTwo />,
                four: <TemplateFour />,
                five: <TemplateFive />,
                zero: <TemplateZero />,
                three: <TemplateThree />,
            }).filter(([key]) => key === props?.formTemplate).map(
                ([, teamplate]) => React.cloneElement(
                    teamplate,{...props}
                )
            )?.at(0) ?? <TemplateZero {...props} />}
        </div>
    );
}

export default Templates;