package org.merrymike.soft.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name="Sprint")
@NoArgsConstructor
@Getter
@Setter
public class Sprint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "goal", nullable = false)
    private String goal;

    @Column(name = "startdate", nullable = false)
    private Date startdate;

    @Column(name = "enddate", nullable = false)
    private Date enddate;

    @Column(name = "Project_ID", nullable = false)
    private int projectID;
}
