import React, {
    useState
} from 'react';

import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AdsClickIcon from '@mui/icons-material/AdsClick';

function TemplateCard({
    handleOnSubmit, template
}) {
    const { id, data } = template;
    
    const { t } = useTranslation();
    const [selected, setSelected] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        setSelected(!selected);
        handleOnSubmit(id, data);
    };

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleHoverExit = () => {
        setIsHovered(false);
    };

    return (
        <form className={selected && 'animate-pulse'} name={`form#selectTemplate:${data.name}`}>
            <div style={{ margin: '3vh 1vw', height: 'auto', width: 'auto', position: 'relative' }}>
                <div>
                    <img
                        alt={t(data.name)}
                        src={data.thumbnail}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHoverExit}
                        className={!isHovered
                            ? 'w-[100%] h-[45vh] border-[3px] border-solid border-black dark:border-white'
                            : 'w-[100%] h-[45vh] border-[3px] border-dashed border-black dark:border-white hover:opacity-70'
                        }
                    />

                    {isHovered && (
                        <Button
                            type="submit"
                            color="inherit"
                            variant="outlined"
                            style={{
                                top: '50%',
                                left: '50%',
                                position: 'absolute',
                                alignItems: 'center',
                                background: '#ffffff7a',
                                transform: 'translate(-50%, -50%)',
                            }}
                            onClick={onSubmit}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHoverExit}
                            className="font-bold py-2 px-4 rounded"
                        >
                            <AdsClickIcon color="inherit" fontSize='large' />
                            <Typography color="black">
                                {t('Select')}
                            </Typography>
                        </Button>
                    )}
                </div>
            </div>
        </form>
    );
}

export default TemplateCard;