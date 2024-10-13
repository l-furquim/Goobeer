package back.adapter.out.persistence.mapper.announcement;

import back.adapter.out.persistence.entity.announcement.AnnouncementEntity;
import back.adapter.out.persistence.entity.product.ProductEntity;
import back.adapter.out.persistence.mapper.product.ProductMapper;
import back.domain.model.announcement.Announcement;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class AnnouncementMapper {
    public Optional<AnnouncementEntity> toEntity(Announcement announcement, List<ProductEntity> list){
        return Optional.of(new AnnouncementEntity(
                announcement.getAnnouncementId(),
                announcement.getAnnouncementName(),
                announcement.getAnnouncementPrice(),
                announcement.getAnnouncementLikes(),
                announcement.getAnnouncementQuestions(),
                announcement.getAnnouncerName(),
                announcement.getAnnouncementStreet(),
                announcement.getAnnouncementNumber(),
                announcement.getAnnouncementState(),
                announcement.getProductImages(),
                list,
                announcement.getAnnouncementDistrict()
                ));
    }




    public Optional<Announcement> toDomain(AnnouncementEntity announcement){
        return Optional.of(new Announcement(
                announcement.getAnnouncementEntityId(),
                announcement.getAnnouncementEntityPrice(),
                announcement.getAnnouncementEntityName(),
                announcement.getAnnouncementEntityLikes(),
                announcement.getAnnouncementEntityQuestions(),
                announcement.getAnnouncerId(),
                announcement.getProductImages(),
                ProductMapper.productEntityToDomainList(announcement.getProducts()),
                announcement.getAnnouncementStreet(),
                announcement.getAnnouncementNumber(),
                announcement.getAnnouncementState(),
                announcement.getAnnouncementDistrict()
        ));
    }



}
