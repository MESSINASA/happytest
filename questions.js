const questions = {
    anxiety: [
        {
            id: 'a1',
            text: '过去两周内，感到紧张、焦虑或心烦意乱',
            options: [
                { value: 0, text: '完全没有' },
                { value: 1, text: '有几天' },
                { value: 2, text: '超过一周' },
                { value: 3, text: '几乎每天' }
            ]
        },
        {
            id: 'a2',
            text: '过去两周内，不能停止或控制担心',
            options: [
                { value: 0, text: '完全没有' },
                { value: 1, text: '有几天' },
                { value: 2, text: '超过一周' },
                { value: 3, text: '几乎每天' }
            ]
        },
        {
            id: 'a3',
            text: '过去两周内，对各种各样的事情担心过度',
            options: [
                { value: 0, text: '完全没有' },
                { value: 1, text: '有几天' },
                { value: 2, text: '超过一周' },
                { value: 3, text: '几乎每天' }
            ]
        },
        {
            id: 'a4',
            text: '过去两周内，难以放松',
            options: [
                { value: 0, text: '完全没有' },
                { value: 1, text: '有几天' },
                { value: 2, text: '超过一周' },
                { value: 3, text: '几乎每天' }
            ]
        },
        {
            id: 'a5',
            text: '过去两周内，心神不定，难以静坐',
            options: [
                { value: 0, text: '完全没有' },
                { value: 1, text: '有几天' },
                { value: 2, text: '超过一周' },
                { value: 3, text: '几乎每天' }
            ]
        }
    ],
    depression: [
        {
            id: 'd1',
            text: '过去两周内，做事时提不起劲或没有兴趣',
            options: [
                { value: 0, text: '完全没有' },
                { value: 1, text: '有几天' },
                { value: 2, text: '超过一周' },
                { value: 3, text: '几乎每天' }
            ]
        },
        {
            id: 'd2',
            text: '过去两周内，感到心情低落、沮丧或绝望',
            options: [
                { value: 0, text: '完全没有' },
                { value: 1, text: '有几天' },
                { value: 2, text: '超过一周' },
                { value: 3, text: '几乎每天' }
            ]
        },
        {
            id: 'd3',
            text: '过去两周内，入睡困难、睡不安稳或睡眠过多',
            options: [
                { value: 0, text: '完全没有' },
                { value: 1, text: '有几天' },
                { value: 2, text: '超过一周' },
                { value: 3, text: '几乎每天' }
            ]
        },
        {
            id: 'd4',
            text: '过去两周内，感觉疲倦或没有活力',
            options: [
                { value: 0, text: '完全没有' },
                { value: 1, text: '有几天' },
                { value: 2, text: '超过一周' },
                { value: 3, text: '几乎每天' }
            ]
        },
        {
            id: 'd5',
            text: '过去两周内，对自己失望，觉得自己很糟或让家人失望',
            options: [
                { value: 0, text: '完全没有' },
                { value: 1, text: '有几天' },
                { value: 2, text: '超过一周' },
                { value: 3, text: '几乎每天' }
            ]
        }
    ],
    stress: [
        {
            id: 's1',
            text: '过去一个月中，你经常感到无法控制生活中重要的事情吗？',
            options: [
                { value: 0, text: '从不' },
                { value: 1, text: '偶尔' },
                { value: 2, text: '经常' },
                { value: 3, text: '很频繁' }
            ]
        },
        {
            id: 's2',
            text: '过去一个月中，你经常感到信心充足，有能力处理个人问题吗？',
            options: [
                { value: 3, text: '从不' },
                { value: 2, text: '偶尔' },
                { value: 1, text: '经常' },
                { value: 0, text: '很频繁' }
            ]
        },
        {
            id: 's3',
            text: '过去一个月中，你经常感到事情在按照你的想法发展吗？',
            options: [
                { value: 3, text: '从不' },
                { value: 2, text: '偶尔' },
                { value: 1, text: '经常' },
                { value: 0, text: '很频繁' }
            ]
        },
        {
            id: 's4',
            text: '过去一个月中，你经常感到困难重重，无法克服吗？',
            options: [
                { value: 0, text: '从不' },
                { value: 1, text: '偶尔' },
                { value: 2, text: '经常' },
                { value: 3, text: '很频繁' }
            ]
        },
        {
            id: 's5',
            text: '过去一个月中，你经常感到愤怒，因为事情超出了你的控制范围？',
            options: [
                { value: 0, text: '从不' },
                { value: 1, text: '偶尔' },
                { value: 2, text: '经常' },
                { value: 3, text: '很频繁' }
            ]
        }
    ]
}; 