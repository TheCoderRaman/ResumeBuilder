import React from 'react';
import Button from './../Buttons/Button';
import { useTranslation } from 'react-i18next';

function Pagination(props) {
  const { t } = useTranslation();
  const {paginateAction} = props.actions;

  return ((props.stepForm.handler.hasPreviousStep() || props.stepForm.handler.hasNextStep()) && (
        <div key={'#pagination:container'} className='flex justify-center mt-5'>
          {props.stepForm.handler.hasPreviousStep() && (
              <div key={'#pagination:buttonPrevious'}>
                <Button
                  type="button"
                  title={t('Previous')}
                  key={'#pagination:previous'}
                  className="grid content-start"
                  onClick={props.loading
                    ?() => {} :() => {props.onClickHandle("previous")}
                  }
                  state={paginateAction.previous ?"loading" : "normal"}
                  disabled={Object.values(paginateAction).filter((value) => value).length > 0}
                />
              </div>
          )}
          <div key={'#pagination:buttonUpdate'}>
            <Button
              type="button"
              title={t('Update')}
              key={'#pagination:update'}
              className="grid content-start"
              onClick={props.loading
                ?() => {} :() => {props.onClickHandle("update")}
              }
              state={paginateAction.update ?"loading" : "normal"}
              disabled={Object.values(paginateAction).filter((value) => value).length > 0}
            />
          </div>
          {props.stepForm.handler.hasNextStep() ? (
              <div key={'#pagination:buttonNext'}>
                <Button
                  type="button"
                  title={t('Next')}
                  key={'#pagination:next'}
                  className="grid content-end"
                  onClick={props.loading
                    ?() => {} :() => {props.onClickHandle("next")}
                  }
                  state={paginateAction.next ?"loading" : "normal"}
                  disabled={Object.values(paginateAction).filter((value) => value).length > 0}
                />
              </div>
          ) : (
            <div key={'#pagination:buttonComplete'}>
                <Button
                  type="button"
                  title={t('Complete')}
                  key={'#pagination:complete'}
                  className="grid content-end"
                  onClick={props.loading
                    ?() => {} :() => {props.onClickHandle("complete")}
                  }
                  state={paginateAction.complete ?"loading" : "normal"}
                  disabled={Object.values(paginateAction).filter((value) => value).length > 0}
                />
              </div>
          )}
        </div>
      
  ))
}

export default Pagination;