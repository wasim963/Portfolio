import React from 'react';

// react views to render
import { experienceTimeline as ExperienceTimeline } from '@views/experience-timeline';
import { ServicesView } from '@views/services';

const underConstruction = () => {
  return(
    <h3>Under Construction</h3>
  )
}

const VIEWS = {
  'experienceTimeline': ExperienceTimeline,
  'services': ServicesView
}


export const experiencePage = ( props ) => {
  const { widgets } = props;

  return (
    <div className='ui-experience-page'>
      {
        widgets.map( widget => {
          const View = VIEWS[ widget?.name ];
          const widgetClassName = `ui-experience-page__widget ui-experience-page__widget__${widget?.name}`;

          return(
              <View 
                key={widget.name}  
                primaryClassName={widgetClassName} 
              />
          )
        } )
      }
    </div>
  )
}

// set display name
experiencePage.displayName = 'experiencePage';

// set default props
experiencePage.defaultProps = {
  widgets: [
    {
      name: 'experienceTimeline',
      value: 'experience',
      title: 'Experience'
    },
    {
      name: 'services',
      value: 'services',
      title: 'Services'
    }
  ]
};
