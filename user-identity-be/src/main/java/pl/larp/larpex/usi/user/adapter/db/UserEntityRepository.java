package pl.larp.larpex.usi.user.adapter.db;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface UserEntityRepository extends JpaRepository<UserEntity, UUID> {}
