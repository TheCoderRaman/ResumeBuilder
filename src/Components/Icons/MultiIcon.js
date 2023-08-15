import React from 'react';
import * as Muicon from '@mui/icons-material';
import { isEmpty } from './../../Utils/isEmpty';

function MultiIcon(props) {
    const Icon = Muicon[props.name ?? null];

    if(!isEmpty(Icon)){
        return <Icon {...props} />;
    }

    return <>{props.name ?? 'null'}</>;
}

export default MultiIcon;