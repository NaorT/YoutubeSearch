import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as M from '../../models';
import { UserService } from '../../services/user/user.service';
import { PlaylistService } from '../../services/playlist/playlist.service';
import * as uuidv1 from 'uuid/v1';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-add-list-tab',
  templateUrl: './add-list-tab.component.html',
  styleUrls: ['./add-list-tab.component.scss']
})
export class AddListTabComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;
  playlist: M.Playlist;
  checkBox: string;
  constructor(
    private _formBuilder: FormBuilder,
    private playlistService: PlaylistService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.initView();
  }
  private initView() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.initPlaylist();
  }

  private initPlaylist(): void {
    this.playlist = {
      pin_code: undefined,
      id: undefined,
      created_at: undefined,
      created_by: undefined,
      organization: undefined,
      name: undefined,
      genre: undefined,
      isEditeable: true,
      videos: [],
      listeners: [],
      created_by_id: undefined
    };
  }
  savePlaylist(stepper: MatStepper): void {
    this.playlist.pin_code = Math.random()
      .toString()
      .substr(2, 6);
    this.playlistService.validatePinCode(this.playlist.pin_code).subscribe((value: any) => {
      if (value && value.length > 0) {
          this.savePlaylist(stepper);
        } else {
          this.playlist.created_at = new Date().getTime();
          this.playlist.created_by_id = this.userService.getCurrentUser().id;
          this.playlist.listeners.push(this.userService.getCurrentUser().id);
          this.playlist.id = uuidv1();
          this.playlist.isEditeable = this.checkBox.toLowerCase() === 'yes';
          this.playlistService.setItem(
            M.CollectionName.playlist,
            this.playlist
          );
          this.initPlaylist();
          stepper.reset();
        }
      });
  }

  onDragover($event) {
  }
  onDrop($event) {
    this.playlistService.addVideoToLocallist(this.playlist , $event.data);
  }

}
