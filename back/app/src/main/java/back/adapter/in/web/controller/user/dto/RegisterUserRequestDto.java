package back.adapter.in.web.controller.user.dto;

import org.springframework.web.multipart.MultipartFile;

public record RegisterUserRequestDto(String userName, String userEmail, String userPassword) {
}
