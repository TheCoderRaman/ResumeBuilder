/**
 * All application resume forms will be defined here.
 *
 * @var const forms
 */
export const forms = {
  selected: 'tech_resume',
  templates: {
      tech_resume: {
          stepOne: {
              id: 'personal_info',
              name: 'Personal Info',
              icon: 'AccountCircleOutlined',
              inputs: [
                  {
                      type: 'unknown',
                      name: 'photo',
                      titile: 'Photo',
                      value: [],
                      validation: 'required'
                  },
                  {
                      type: 'text',
                      name: 'first_name',
                      title: 'First Name',
                      value: 'John',
                      validation: 'required',
                      props: {
                          placeholder: 'John',
                      },
                  },
                  {
                      type: 'text',
                      name: `last_name`,
                      title: 'Last Name',
                      value: 'Doe',
                      validation: 'required',
                      props: {
                          placeholder: 'Doe',
                      },
                  },
                  {
                      type: 'email',
                      name: 'email',
                      title: 'Email',
                      value: 'johndoe@domain.tld',
                      validation: 'required!email',
                      props: {
                          placeholder: 'johndoe@domain.tld',
                      },
                  },
                  {
                      type: 'text',
                      name: 'mobile',
                      title: 'Mobile',
                      value: '+911234567890',
                      validation: 'required',
                      props: {
                          placeholder: '+911234567890',
                      },
                  },
                  {
                      type: 'text',
                      name: 'address',
                      title: 'Address',
                      value: '10, California, 3rd Street, New York Post',
                      validation: 'required',
                      props: {
                          placeholder: '10, California, 3rd Street, New York Post',
                      },
                  },
                  {
                      type: 'text',
                      name: 'city',
                      title: 'City',
                      value: 'New York',
                      validation: 'required',
                      props: {
                          placeholder: 'New York',
                      },
                  },
                  {
                      type: 'text',
                      name: 'state',
                      title: 'State',
                      value: 'California',
                      validation: 'required',
                      props: {
                          placeholder: 'California',
                      },
                  },
                  {
                      type: 'number',
                      name: 'postal_code',
                      title: 'Postal Code',
                      value: '123456',
                      validation: 'required!minNumbers',
                      props: {
                          placeholder: '123456',
                      },
                  },
                  {
                      type: 'text',
                      name: 'objective',
                      title: 'Objective',
                      value: 'Take a tour of our Resume Builder.',
                      validation: 'required',
                      props: {
                          placeholder: 'Take a tour of our Resume Builder.',
                      },
                  },
              ],
          },
          stepTwo: {
              id: 'work_experience',
              name: 'Work Experience',
              icon: 'WorkHistoryRounded',
              inputs: [
                  {
                      type: 'fieldArray',
                      limit: {
                        min: 1, max: 5
                      },
                      name: 'work_experience',
                      inputs: [
                          {
                              type: 'text',
                              name: 'job_title',
                              title: 'Job Title',
                              value: 'Null Developer',
                              validation: 'required',
                              props: {
                                  placeholder: 'Null Developer',
                              },
                          },
                          {
                              type: 'text',
                              name: 'organization_name',
                              title: 'Organization Name',
                              value: 'Null Soft',
                              validation: 'required',
                              props: {
                                  placeholder: 'Null Soft',
                              },
                          },
                          {
                              type: 'select',
                              name: 'start_year',
                              title: 'Start Year',
                              value: 0,
                              validation: 'required!minNumbers',
                              props: {
                                  required: true,
                                  options: [
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2018',
                                    '2017',
                                    '2016',
                                    '2015',
                                    '2014',
                                    '2013'
                                  ],
                                  placeholder: '2013',
                              },
                          },
                          {
                              type: 'select',
                              name: 'end_year',
                              title: 'End Year',
                              value: 0,
                              validation: 'required!minNumbers',
                              props: {
                                  required: true,
                                  options: [
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2018',
                                    '2017',
                                    '2016',
                                    '2015',
                                    '2014',
                                    '2013'
                                  ],
                                  placeholder: '2022',
                              },
                          },
                      ],
                  },
              ],
          },
          stepThree: {
              id: 'education_details',
              name: 'Education Details',
              icon: 'SchoolRounded',
              inputs: [
                  {
                      type: 'fieldArray',
                      limit: {
                        min: 1, max: 5
                      },
                      name: 'education_details',
                      inputs: [
                          {
                              type: 'text',
                              name: 'type',
                              title: 'Type',
                              value: 'Post Graduation',
                              validation: 'required',
                              props: {
                                  placeholder: 'Post Graduation',
                              },
                          },
                          {
                              type: 'text',
                              name: 'university',
                              title: 'University',
                              value: 'IIT Null',
                              validation: 'required',
                              props: {
                                  placeholder: 'IIT Null',
                              },
                          },
                          {
                              type: 'text',
                              name: 'degree',
                              title: 'Degree',
                              value: 'Null.Tech',
                              validation: 'required',
                              props: {
                                  placeholder: 'Null.Tech',
                              },
                          },
                          {
                              type: 'select',
                              name: 'start_year',
                              title: 'Start Year',
                              value: 0,
                              validation: 'required!minNumbers',
                              props: {
                                  options: [
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2018',
                                    '2017',
                                    '2016',
                                    '2015',
                                    '2014',
                                    '2013'
                                  ],
                                  placeholder: '2018',
                              },
                          },
                          {
                              type: 'select',
                              name: 'end_year',
                              title: 'End Year',
                              value: 0,
                              validation: 'required!minNumbers',
                              props: {
                                  options: [
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2018',
                                    '2017',
                                    '2016',
                                    '2015',
                                    '2014',
                                    '2013'
                                  ],
                                  placeholder: '2022',
                              },
                          }
                      ],
                  }
              ],
          },
          stepFour: {
              id: 'key_skills',
              name: 'Key Skills',
              icon: 'StarsRounded',
              inputs: [
                  {
                      type: 'fieldArray',
                      limit: {
                          min: 1, max: 5
                      },
                      name: 'key_skills',
                      inputs: [
                          {
                              type: 'text',
                              name: 'skill',
                              title: 'Skill',
                              value: 'Null',
                              validation: 'required',
                              props: {
                                  placeholder: 'Null',
                              },
                          },
                      ],
                  },
              ],
          },
      },
  }
};