using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace formationApi.dtos.request
{
    public class CreateQuizDto
    {
        public string Title { get; set; }
        public List<QuestionDto> Questions { get; set; }


        public class QuestionDto
        {
            public string Title { get; set; }
            public int points {get; set;}
            public int Order { get; set; }
            public List<AnswerDto> Answers { get; set; }
        }

        public class AnswerDto
        {
            public string Text { get; set; }
            public bool IsCorrect { get; set; }
        }
    }
}