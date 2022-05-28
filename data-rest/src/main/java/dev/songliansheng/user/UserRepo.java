package dev.songliansheng.user;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.Set;

public interface UserRepo  extends CrudRepository<User, Long> {

    @Cacheable
    Optional<User> findByUsername(String uname);

    Set<User> findBy();
}
