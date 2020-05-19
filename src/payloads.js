module.exports = {
    confirmation: context => {
        // console.log('=========Context',context)
        return {
            channel: context.channel_id,
            text: 'Updates posted!',
            blocks: JSON.stringify([
                {
                    type: 'divider'
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: '*check posted Updates!*'
                    }
                },
                {
                    type: 'divider'
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `*Completed Task*\n${context.completedTask}
                        \n*Inprogress Task*\n${context.inprogressTask}
                        \n*Task in QA*\n${context.qaTask}
                        \n*Blocker*\n${context.blockerTask}`
                    }
                },
                // {
                //     type: 'context',
                //     elements: [
                //         {
                //             type: 'mrkdwn',
                //             text: `*Urgency*: ${context.urgency}`
                //         }
                //     ]
                // }
            ])
        }
    },
    modal: context => {
        return {
            trigger_id: context.trigger_id,
            view: JSON.stringify({
                type: 'modal',
                title: {
                    type: 'plain_text',
                    text: 'Submit the daily updates'
                },
                callback_id: 'submit-ticket',
                submit: {
                    type: 'plain_text',
                    text: 'Submit'
                },
                blocks: [
                    // {
                    //     block_id: 'title_block',
                    //     type: 'input',
                    //     label: {
                    //         type: 'plain_text',
                    //         text: 'Title'
                    //     },
                    //     element: {
                    //         action_id: 'title',
                    //         type: 'plain_text_input'
                    //     },
                    //     hint: {
                    //         type: 'plain_text',
                    //         text: '30 second summary of the problem'
                    //     }
                    // },
                    {
                        block_id: 'title_completedTask',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Completed Task'
                        },
                        element: {
                            action_id: 'completedTask',
                            type: 'plain_text_input',
                            multiline: true
                        }
                    },
                    {
                        block_id: 'title_inprogressTask',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Add Inprogress task'
                        },
                        element: {
                            action_id: 'inprogresstask',
                            type: 'plain_text_input',
                            multiline: true
                        }
                    },
                    {
                        block_id: 'title_qaTask',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Add Task which are in QA'
                        },
                        element: {
                            action_id: 'qatask',
                            type: 'plain_text_input',
                            multiline: true
                        },
                        // optional: true
                    },
                    {
                        block_id: 'title_blockers',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Add Task which are in blockers'
                        },
                        element: {
                            action_id: 'blockerstask',
                            type: 'plain_text_input',
                            // multiline: true
                        },
                        // optional: true
                    },
                    // {
                    //     block_id: 'urgency_block',
                    //     type: 'input',
                    //     label: {
                    //         type: 'plain_text',
                    //         text: 'Importance'
                    //     },
                    //     element: {
                    //         action_id: 'urgency',
                    //         type: 'static_select',
                    //         options: [
                    //             {
                    //                 text: {
                    //                     type: "plain_text",
                    //                     text: "High"
                    //                 },
                    //                 value: "high"
                    //             },
                    //             {
                    //                 text: {
                    //                     type: "plain_text",
                    //                     text: "Medium"
                    //                 },
                    //                 value: "medium"
                    //             },
                    //             {
                    //                 text: {
                    //                     type: "plain_text",
                    //                     text: "Low"
                    //                 },
                    //                 value: "low"
                    //             }
                    //         ]
                    //     },
                    //     optional: true
                    // }
                ]
            })
        }
    }
}