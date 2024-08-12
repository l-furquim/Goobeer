package back.domain.port.in;
import back.adapter.in.web.controller.question.dto.AwnswerAQuestionRequestDto;
import back.adapter.in.web.controller.question.dto.EditQuestionRequestDto;
import back.adapter.in.web.controller.question.dto.MakeAQuestionRequestDto;
import back.domain.model.question.Question;

public interface QuestionService {
    Question makeAQuestion(MakeAQuestionRequestDto makeAQuestionRequestDto);
    void editQuestion(EditQuestionRequestDto editQuestionRequestDto);
    void answerAQuestion(AwnswerAQuestionRequestDto awnswerAQuestionRequestDto);
}
